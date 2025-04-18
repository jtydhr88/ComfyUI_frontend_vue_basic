<template>
  <div class="drawing-board">
    <div class="toolbar">
      <button :class="{ active: !isEraser }" @click="setTool('pen')">pen</button>
      <button @click="clearCanvas">clear canvas</button>
    </div>

    <div class="color-picker">
      <div v-for="(color, index) in colors"
           :key="index"
           :style="{ backgroundColor: color }"
           :class="{ 'color-option': true, 'active': currentColor === color }"
           @click="selectColor(color)">
      </div>
    </div>

    <div class="size-slider">
      <label>brush size: {{ brushSize }}px</label>
      <input type="range" min="1" max="50" v-model.number="brushSize" @change="updateBrushStyle">
    </div>

    <div class="canvas-container">
      <canvas
        ref="canvas"
        :width="width"
        :height="height"
        @mousedown="startDrawing"
        @mousemove="draw"
        @mouseup="stopDrawing"
        @mouseleave="stopDrawing"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="stopDrawing">
      </canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawingBoard',
  props: {
    width: {
      type: Number,
      required: false,
      default: 800
    },
    height: {
      type: Number,
      required: false,
      default: 500
    },
    initialColor: {
      type: String,
      required: false,
      default: '#000000'
    },
    initialBrushSize: {
      type: Number,
      required: false,
      default: 5
    },
    availableColors: {
      type: Array,
      required: false,
      default: () => ['#000000', '#ff0000', '#0000ff', '#00ff00', '#ffff00', '#ff00ff', '#00ffff']
    }
  },
  data() {
    return {
      isDrawing: false,
      lastX: 0,
      lastY: 0,
      ctx: null,
      isEraser: false,
      brushSize: this.initialBrushSize,
      currentColor: this.initialColor,
      colors: this.availableColors,
      canvasData: null
    };
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext('2d');
    this.setupCanvas();

    this.$nextTick(() => {
      this.$emit('mounted', this.$refs.canvas);
    });
  },
  methods: {
    setupCanvas() {
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillRect(0, 0, this.width, this.height);

      this.updateBrushStyle();

      this.saveState();
    },

    updateBrushStyle() {
      if (this.isEraser) {
        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.strokeStyle = 'rgba(0,0,0,1)';
      } else {
        this.ctx.globalCompositeOperation = 'source-over';
        this.ctx.strokeStyle = this.currentColor;
      }
      this.ctx.lineWidth = this.brushSize;
      this.ctx.lineJoin = 'round';
      this.ctx.lineCap = 'round';
    },

    startDrawing(event) {
      this.isDrawing = true;
      const { offsetX, offsetY } = this.getCoordinates(event);
      this.lastX = offsetX;
      this.lastY = offsetY;

      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);

      this.ctx.arc(this.lastX, this.lastY, this.brushSize / 2, 0, Math.PI * 2);
      this.ctx.fill();

      this.$emit('drawing-start', { x: offsetX, y: offsetY, tool: this.isEraser ? 'eraser' : 'pen' });
    },

    draw(event) {
      if (!this.isDrawing) return;

      const { offsetX, offsetY } = this.getCoordinates(event);

      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(offsetX, offsetY);
      this.ctx.stroke();

      this.lastX = offsetX;
      this.lastY = offsetY;

      this.$emit('drawing', { x: offsetX, y: offsetY, tool: this.isEraser ? 'eraser' : 'pen' });
    },

    stopDrawing() {
      if (this.isDrawing) {
        this.isDrawing = false;
        this.saveState();

        this.$emit('drawing-end');
      }
    },

    getCoordinates(event) {
      let offsetX, offsetY;

      if (event.type.startsWith('touch')) {
        event.preventDefault();
        const rect = this.$refs.canvas.getBoundingClientRect();
        offsetX = event.touches[0].clientX - rect.left;
        offsetY = event.touches[0].clientY - rect.top;
      } else {
        offsetX = event.offsetX;
        offsetY = event.offsetY;
      }

      return { offsetX, offsetY };
    },

    handleTouchStart(event) {
      event.preventDefault();
      const touch = event.touches[0];
      const mouseEvent = {
        type: 'touch',
        touches: [touch]
      };
      this.startDrawing(mouseEvent);
    },

    handleTouchMove(event) {
      event.preventDefault();
      if (!this.isDrawing) return;

      const touch = event.touches[0];
      const mouseEvent = {
        type: 'touch',
        touches: [touch]
      };
      this.draw(mouseEvent);
    },

    setTool(tool) {
      this.isEraser = tool === 'eraser';
      this.updateBrushStyle();

      this.$emit('tool-change', tool);
    },

    selectColor(color) {
      this.currentColor = color;
      if (this.isEraser) {
        this.isEraser = false;
      }
      this.updateBrushStyle();

      this.$emit('color-change', color);
    },

    clearCanvas() {
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillRect(0, 0, this.width, this.height);
      this.updateBrushStyle();
      this.saveState();

      this.$emit('canvas-clear');
    },

    saveState() {
      this.canvasData = this.$refs.canvas.toDataURL('image/png');

      this.$emit('state-save', this.canvasData);
    },
  }
};
</script>

<style scoped>
.drawing-board {
  font-family: Arial, sans-serif;
  max-width: 100%;
}

.canvas-container {
  position: relative;
  margin-top: 20px;
}

canvas {
  border: 1px solid #ccc;
  cursor: crosshair;
  background-color: white;
  max-width: 100%;
}

.toolbar {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

button {
  padding: 8px 16px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
}

button.active {
  background-color: #2E7D32;
}

button.eraser {
  background-color: #f44336;
}

button.eraser.active {
  background-color: #c62828;
}

.color-picker {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.color-option {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
}

.color-option.active {
  border: 2px solid #333;
}

.size-slider {
  margin-bottom: 15px;
}
</style>