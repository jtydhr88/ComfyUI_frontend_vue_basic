<template>
  <div class="drawing-app">
    <ToolBar
      :colors="availableColors"
      :initialColor="initialColor"
      :initialBrushSize="initialBrushSize"
      @tool-change="handleToolChange"
      @color-change="handleColorChange"
      @brush-size-change="handleBrushSizeChange"
      @canvas-clear="handleCanvasClear"
    />

    <DrawingBoard
      ref="drawingBoard"
      :width="width"
      :height="height"
      :initialColor="initialColor"
      :initialBrushSize="initialBrushSize"
      @drawing-start="onDrawingStart"
      @drawing="onDrawing"
      @drawing-end="onDrawingEnd"
      @state-save="onStateSave"
      @mounted="onDrawingBoardMounted"
    />
  </div>
</template>

<script>
import ToolBar from './ToolBar.vue';
import DrawingBoard from './DrawingBoard.vue';

export default {
  name: 'DrawingApp',
  components: {
    ToolBar,
    DrawingBoard
  },
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
  methods: {
    // Handle events from ToolBar
    handleToolChange(tool) {
      this.$refs.drawingBoard.setTool(tool);
      this.$emit('tool-change', tool);
    },

    handleColorChange(color) {
      this.$refs.drawingBoard.setColor(color);
      this.$emit('color-change', color);
    },

    handleBrushSizeChange(size) {
      this.$refs.drawingBoard.setBrushSize(size);
      this.$emit('brush-size-change', size);
    },

    handleCanvasClear() {
      this.$refs.drawingBoard.clearCanvas();
    },

    // Forward events from DrawingBoard
    onDrawingStart(data) {
      this.$emit('drawing-start', data);
    },

    onDrawing(data) {
      this.$emit('drawing', data);
    },

    onDrawingEnd() {
      this.$emit('drawing-end');
    },

    onStateSave(data) {
      this.$emit('state-save', data);
    },

    onDrawingBoardMounted(canvas) {
      this.$emit('mounted', canvas);
    }
  }
};
</script>

<style scoped>
.drawing-app {
  font-family: Arial, sans-serif;
  max-width: 100%;
}
</style>