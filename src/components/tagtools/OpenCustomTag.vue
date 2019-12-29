<template>
  <div>
    <tag-opener />
    <tag-name :tagName="tagName" />

    <div v-if="attrName" class="inline-block ml-2">
      <attr-name>
        {{ attrName }}
      </attr-name>
      <div class="inline-block code-blue">=</div>
      <quote-sign />
      <span class="code-green">
        <slot name="attrValues"></slot>
      </span>
      <quote-sign />
    </div>
    <tag-closer />
  </div>
</template>

<script>
import TagOpener from "./TagOpener";
import TagName from "./TagName";
import TagCloser from "./TagCloser";
import AttrName from "../AttrName";
import QuoteSign from "../QuoteSign";

export default {
  name: "open-custom-tag",
  components: {
    TagOpener,
    TagName,
    TagCloser,
    AttrName,
    QuoteSign
  },
  props: {
    tagName: {
      type: String,
      default: "div"
    },
    attrName: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped></style>
