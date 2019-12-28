<template>
  <div class="whitespace-no-wrap">
    <!-- open tag -->
    <tag-opener class="inline-block code-blue" />

    <tag-name>img</tag-name>
    &nbsp;

    <!-- class -->
    <attr-name />
    <equal-sign />
    <quote-sign />

    <div class="inline-block code-green">h-16 w-16</div>

    <class-attrs ref="classAvatarLarger" :reference="'classAvatarLarger'">
      <div class="hidden">&nbsp;</div>
      &nbsp;
      <div class="hidden">m</div>
      <div class="hidden">d</div>
      <div class="hidden">:</div>
      <div class="hidden">h</div>
      <div class="hidden">-</div>
      <div class="hidden">2</div>
      <div class="hidden">4</div>
      <div class="hidden">&nbsp;</div>
      &nbsp;
      <div class="hidden">m</div>
      <div class="hidden">d</div>
      <div class="hidden">:</div>
      <div class="hidden">w</div>
      <div class="hidden">-</div>
      <div class="hidden">2</div>
      <div class="hidden">4</div>
    </class-attrs>

    <div
      ref="avatarLargerCursor"
      class="invisible inline-block border-r-2 border-yellow h-6 absolute"
      style="margin-top: -0.125rem"
    ></div>

    <class-attrs ref="classAvatarRounded" :reference="'classAvatarRounded'">
      <div class="hidden">&nbsp;</div>
      &nbsp;
      <div class="hidden">r</div>
      <div class="hidden">o</div>
      <div class="hidden">u</div>
      <div class="hidden">n</div>
      <div class="hidden">d</div>
      <div class="hidden">e</div>
      <div class="hidden">d</div>
      <div class="hidden">-</div>
      <div class="hidden">f</div>
      <div class="hidden">u</div>
      <div class="hidden">l</div>
      <div class="hidden">l</div>
    </class-attrs>

    <class-attrs ref="classAvatarCenter" :reference="'classAvatarCenter'">
      <div class="hidden">&nbsp;</div>
      &nbsp;
      <div class="hidden">m</div>
      <div class="hidden">x</div>
      <div class="hidden">-</div>
      <div class="hidden">a</div>
      <div class="hidden">u</div>
      <div class="hidden">t</div>
      <div class="hidden">o</div>
    </class-attrs>

    <class-attrs ref="classAvatarMarginFix" :reference="'classAvatarMarginFix'">
      <div class="hidden">&nbsp;</div>
      &nbsp;
      <div class="hidden">m</div>
      <div class="hidden">d</div>
      <div class="hidden">:</div>
      <div class="hidden">m</div>
      <div class="hidden">x</div>
      <div class="hidden">-</div>
      <div class="hidden">0</div>
    </class-attrs>

    <class-attrs
      ref="classAvatarRightMargin"
      :reference="'classAvatarRightMargin'"
    >
      <div class="hidden">&nbsp;</div>
      &nbsp;
      <div class="hidden">m</div>
      <div class="hidden">d</div>
      <div class="hidden">:</div>
      <div class="hidden">m</div>
      <div class="hidden">r</div>
      <div class="hidden">-</div>
      <div class="hidden">6</div>
    </class-attrs>

    <div
      ref="avatarCursor"
      class="invisible inline-block border-r-2 border-yellow h-6 absolute"
      style="margin-top: -0.125rem"
    ></div>

    <!-- close quote -->
    <quote-sign />

    &nbsp;
    <attr-name :codeColor="'code-purple'">&nbsp;src</attr-name>

    <equal-sign />
    <div class="inline-block code-green">avatar.jpg</div>
    <quote-sign />
    <tag-closer />
  </div>
</template>

<script>
import ClassAttrs from "./ClassAttrs";
import AttrName from "./AttrName";
import TagOpener from "./TagOpener";
import TagCloser from "./TagCloser";
import TagName from "./TagName";
import EqualSign from "./EqualSign";
import QuoteSign from "./QuoteSign";

export default {
  name: "line-two",
  components: {
    ClassAttrs,
    AttrName,
    TagOpener,
    TagCloser,
    TagName,
    EqualSign,
    QuoteSign
  }
};
</script>

<style lang="scss" scoped></style>
