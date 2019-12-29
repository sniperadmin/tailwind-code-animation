<template>
  <div>
    <tag-opener />
    <span class="code-blue">/</span>
    <tag-name :tagName="tagName" />
    <tag-closer />
  </div>
</template>

<script>
import TagOpener from "./TagOpener";
import TagName from "./TagName";
import TagCloser from "./TagCloser";

export default {
  name: "close-custom-tag",
  components: {
    TagOpener,
    TagName,
    TagCloser
  },
  props: {
    tagName: {
      type: String,
      default: "div"
    }
  }
};
</script>

<style lang="scss" scoped></style>
