import folder_paths
import nodes

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

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("image",)

    FUNCTION = "run"

    CATEGORY = "examples"

    def run(self,  **kwargs):
        print(kwargs["custom_vue_component_basic"]["image"])

        image_path = folder_paths.get_annotated_filepath(kwargs["custom_vue_component_basic"]["image"])

        load_image_node = nodes.LoadImage()
        output_image, ignore_mask = load_image_node.load_image(image=image_path)

        return output_image,

NODE_CLASS_MAPPINGS = {
    "vue-basic": ComfyUIFEExampleVueBasic
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "vue-basic": "Vue Basic"
}