class ComfyUIFEExampleVueBasic:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "custom_vue_component_basic": ("CUSTOM_VUE_COMPONENT_BASIC", {}),
            },
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "run"

    CATEGORY = "examples"

    def run(self,  **kwargs):
        print(kwargs)

        return ("",)

NODE_CLASS_MAPPINGS = {
    "vue-basic": ComfyUIFEExampleVueBasic
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "vue-basic": "Vue Basic"
}