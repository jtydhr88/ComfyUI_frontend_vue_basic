<template>
  <div class="toolbar">
    <button :class="{ active: currentTool === 'pen' }" @click="setTool('pen')">pen</button>
    <button :class="{ active: currentTool === 'eraser' }" @click="setTool('eraser')">eraser</button>
    <button @click="clearCanvas">clear canvas</button>
  </div>

  <div class="color-picker">
    <button v-for="(color, index) in colors"
            :key="index"
            :class="{ 'color-button': true, 'active': currentColor === color }"
            @click="selectColor(color)"
            type="button"
            :title="color"> <!-- Add tooltip for color value -->
      <i class="pi pi-circle-fill" :style="{ color: color }"></i>
    </button>
  </div>

  <div class="size-slider">
    <label>brush size: {{ brushSize }}px</label>
    <input type="range" min="1" max="50" :value="brushSize" @change="updateBrushSize($event)">
  </div>
</template>

<script>
export default {
  name: 'ToolBar',
  props: {
    colors: {
      type: Array,
      required: false,
      default: () => ['#000000', '#ff0000', '#0000ff', '#69a869', '#ffff00', '#ff00ff', '#00ffff']
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
    initialTool: {
      type: String,
      required: false,
      default: 'pen'
    }
  },
  data() {
    return {
      currentColor: this.initialColor,
      brushSize: this.initialBrushSize,
      currentTool: this.initialTool
    };
  },
  methods: {
    setTool(tool) {
      this.currentTool = tool;
      this.$emit('tool-change', tool);
    },
    selectColor(color) {
      this.currentColor = color;
      this.$emit('color-change', color);
    },
    clearCanvas() {
      this.$emit('canvas-clear');
    },
    updateBrushSize(event) {
      this.brushSize = Number(event.target.value);
      this.$emit('brush-size-change', this.brushSize);
    }
  }
};
</script>

<style scoped>
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

.color-picker {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
  align-items: center;
}

.color-button {
  background: none;
  border: 2px solid transparent;
  padding: 4px;
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: outline 0.2s ease, transform 0.2s ease;
  line-height: 1;
}

.color-button i {
  font-size: 1.8em;
  display: block;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.1);
  text-stroke: 1px rgba(0, 0, 0, 0.1);
}

.color-button.active {
  outline: 3px solid #0056b3;
  outline-offset: 2px;

}

.color-button:not(.active):hover {
   outline: 2px solid #ddd;
   outline-offset: 2px;
}

.size-slider {
  margin-bottom: 15px;
}

.size-slider label {
  display: block;
  margin-bottom: 5px;
}

.size-slider input {
  width: 100%;
  max-width: 300px;
}
</style>