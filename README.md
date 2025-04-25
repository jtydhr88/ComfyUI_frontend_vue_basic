# ComfyUI Frontend Vue Basic

A demonstration custom node that showcases how to integrate Vue as a frontend framework within ComfyUI, complete with PrimeVue components and vue-18n support.

## Overview

ComfyUI Frontend Vue Basic provides a working example of how to build interactive UI components for ComfyUI custom nodes using modern web technologies. It features a basic drawing board inside a custom node that outputs the created image as a result.
![image1](doc/img.png)

## Technologies

- **[Vue.js](https://vuejs.org/)** - Progressive JavaScript framework for building user interfaces
- **[PrimeVue](https://primevue.org/)** - Rich UI component library for Vue
- **[vue-i18n](https://vue-i18n.intlify.dev/)** - Internationalization plugin for Vue.js

## Features

- Interactive drawing board within a custom node
- Modern UI components with PrimeVue
- Multi-language support via vue-i18n
- Integration with ComfyUI's API system

## Installation

⚠️ **Important** ⚠️

This demonstration node is not designed to be installed directly via **git clone**. For proper functionality, please install through:

- [ComfyUI Manager]()
- [ComfyUI Registry]()

## Usage

After installation:

1. Add the "vue-basic" node under examples to your workflow
2. Use the drawing interface to create your image
3. Connect the output to compatible nodes (Preview Image, for example) that accept image inputs
4. Run your workflow to process the drawn image

## Development

For those interested in understanding how Vue can be integrated into ComfyUI custom nodes:

1. Review the code structure to see how Vue components are mounted
2. Examine the ComfyUI API integration patterns
3. Note how PrimeVue components and i18n are initialized and used

## Contributing

Contributions are welcome! If you have ideas for improvements or have found bugs, feel free to:

- Open an issue
- Submit a pull request with proposed changes

## License

[MIT License](LICENSE)