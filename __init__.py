from .ComfyUIFEExampleVueBasic import NODE_CLASS_MAPPINGS
import os
import nodes

js_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), "js")

nodes.EXTENSION_WEB_DIRS["ComfyUI-frontend-vue-basic"] = js_dir

__all__ = ['NODE_CLASS_MAPPINGS']
