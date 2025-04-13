export default function transformImports() {
  return {
    name: 'transform-vue-imports',
    renderChunk(code) {
      return code.replace(
        /import\s*{\s*(.*?)\s*}\s*from\s*["']vue["']/g,
        'const { $1 } = window.Vue'
      ).replace(
        /import\s*(.*?)\s*from\s*["']vue["']/g,
        'const $1 = window.Vue'
      );
    }
  };
}