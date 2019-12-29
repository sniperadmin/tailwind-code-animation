<template>
  <div class="inline-block">
    <open-custom-tag
      :tagName="tagName"
      :attrName="attrName"
      class="inline-block"
    >
      <template v-slot:attrValues>
        <span class="inline-block">
          <slot name="attrValues"></slot>
        </span>
      </template>
    </open-custom-tag>

    <div
      class="code-green"
      :class="[inline === true ? 'inline-block' : 'pl-4']"
    >
      <slot>
        // code here...
      </slot>
    </div>
    <close-custom-tag :tagName="tagName" class="inline-block" />
  </div>
</template>

<script>
import OpenCustomTag from "./tagtools/OpenCustomTag";
import CloseCustomTag from "./tagtools/CloseCustomTag";

export default {
  name: "html-tag",
  props: {
    tagName: {
      type: String,
      default: "div"
    },
    attrName: {
      type: String,
      default: null
    },
    inline: {
      type: Boolean,
      default: true
    }
  },
  components: {
    OpenCustomTag,
    CloseCustomTag
  }
};
</script>

<style lang="scss" scoped></style>
