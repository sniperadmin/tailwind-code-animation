<template>
  <div>
    <div class="inline-block text-grey mr-10">5</div>
    &#160;
    <tag-opener />
    <tag-name />
    <div ref="classRoleColor" class="inline-block code-green">
      <div class="hidden">&nbsp;</div>
      &nbsp;
      <div class="hidden code-yellow">c</div>
      <div class="hidden code-yellow">l</div>
      <div class="hidden code-yellow">a</div>
      <div class="hidden code-yellow">s</div>
      <div class="hidden code-yellow">s</div>
      <div class="hidden code-blue">=</div>
      <div class="hidden code-blue">&quot;</div>
      <div class="hidden code-green">t</div>
      <div class="hidden code-green">e</div>
      <div class="hidden code-green">x</div>
      <div class="hidden code-green">t</div>
      <div class="hidden code-green">-</div>
      <div class="hidden code-green">p</div>
      <div class="hidden code-green">u</div>
      <div class="hidden code-green">r</div>
      <div class="hidden code-green">p</div>
      <div class="hidden code-green">l</div>
      <div class="hidden code-green">e</div>
      <div class="hidden code-blue">&quot;</div>
    </div>
    <div
      ref="roleCursor"
      class="invisible inline-block border-r-2 border-yellow h-6 absolute"
      style="margin-top: -0.125rem"
    ></div>
    <tag-closer />
    <div class="inline-block code-white">Vuejs Master</div>
    <tag-opener />
    <span class="code-blue">/</span>
    <tag-name />
    <tag-closer />
  </div>
</template>

<script>
import TagOpener from "./tagtools/TagOpener";
import TagCloser from "./tagtools/TagCloser";
import TagName from "./tagtools/TagName";

export default {
  name: "line-five",
  components: {
    TagOpener,
    TagCloser,
    TagName
  }
};
</script>

<style lang="scss" scoped></style>
