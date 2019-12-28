<template>
  <div>
    <div class="inline-block code-blue">&nbsp;&nbsp;&lt;</div>
    <div class="inline-block code-red">div</div>
    <div ref="classContentCenter" class="inline-block code-green">
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
      <div class="hidden code-green">c</div>
      <div class="hidden code-green">e</div>
      <div class="hidden code-green">n</div>
      <div class="hidden code-green">t</div>
      <div class="hidden code-green">e</div>
      <div class="hidden code-green">
        <span>r</span>
        <div ref="classContentLeftAlign" class="inline-block code-green">
          <div class="hidden">&nbsp;</div>
          &nbsp;
          <div class="hidden code-green">m</div>
          <div class="hidden code-green">d</div>
          <div class="hidden code-green">:</div>
          <div class="hidden code-green">t</div>
          <div class="hidden code-green">e</div>
          <div class="hidden code-green">x</div>
          <div class="hidden code-green">t</div>
          <div class="hidden code-green">-</div>
          <div class="hidden code-green">l</div>
          <div class="hidden code-green">e</div>
          <div class="hidden code-green">f</div>
          <div class="hidden code-green">t</div>
        </div>
        <div
          ref="contentLeftAlignCursor"
          class="invisible inline-block border-r-2 border-yellow h-6 absolute"
          style="margin-top: -0.125rem"
        ></div>
      </div>
      <div class="hidden code-blue">&quot;</div>
    </div>
    <div
      ref="contentCursor"
      class="invisible inline-block border-r-2 border-yellow h-6 absolute"
      style="margin-top: -0.125rem"
    ></div>
    <div class="inline-block code-blue">&gt;</div>
  </div>
</template>

<script>
export default {
  name: "line-three"
};
</script>

<style lang="scss" scoped></style>
