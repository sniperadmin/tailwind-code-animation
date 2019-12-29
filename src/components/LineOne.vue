<template>
  <div class="whitespace-no-wrap">
    <div class="inline-block text-grey mr-2">1</div>
    &#160;
    <!-- tag opener component -->
    <tag-opener class="inline-block code-blue" />
    <!-- div tag component -->
    <tag-name />
    <!-- class attribute -->
    &#160;
    <attr-name />
    <!-- equal sign -->
    <equal-sign />
    <!-- open quote -->
    <quote-sign />
    <!-- first class children ... -->
    <class-attrs ref="classCardFlex" :reference="'classCardFlex'">
      <div
        class="hidden"
        v-for="(value, index) in classOne.split('')"
        :key="index"
      >
        {{ value }}
      </div>
      &#160;
      <div class="hidden">&#160;</div>
    </class-attrs>
    <!-- this is second cursor -->
    <div
      ref="cardFlexCursor"
      class="invisible inline-block border-r-2 border-yellow h-6 absolute"
      style="margin-top: -0.125rem"
    ></div>
    <div class="inline-block code-green">bg-white rounded</div>

    <!-- second class -->
    <class-attrs ref="classCardPadding" :reference="'classCardPadding'">
      <div class="hidden">&nbsp;</div>
      &nbsp;
      <div
        class="hidden"
        v-for="(value, index) in classTwo.split('')"
        :key="index"
      >
        {{ value }}
      </div>
    </class-attrs>

    <div
      ref="cardCursor"
      class="inline-block border-r-2 border-yellow h-6 absolute"
      style="margin-top: -0.125rem"
    ></div>

    <!-- close quote -->
    <quote-sign />

    <!-- close tag -->
    <tag-closer />
  </div>
  <!-- ./coding line one -->
</template>

<script>
import AttrName from "./AttrName";
import TagOpener from "./tagtools/TagOpener";
import TagCloser from "./tagtools/TagCloser";
import TagName from "./tagtools/TagName";
import EqualSign from "./EqualSign";
import QuoteSign from "./QuoteSign";
import ClassAttrs from "./ClassAttrs";

// import TweenLite,
// Power4
// "gsap";

import { tweenTo, tweenStaggerTo } from "../gsapDefinitions";
// import _ from "lodash";

export default {
  name: "line-one",
  components: {
    AttrName,
    TagOpener,
    TagCloser,
    TagName,
    EqualSign,
    QuoteSign,
    ClassAttrs
  },
  data() {
    return {
      classOne: "md:flex",
      classTwo: "p-6"
    };
  },
  methods: {
    startAnimation() {
      this.first();
    },
    first() {
      tweenTo(this.$refs.cardCursor, 0.08, {
        visibility: "visible"
      })
        .then(() =>
          tweenStaggerTo(
            this.$refs.classCardPadding.$el.children,
            0.08,
            { display: "inline-block" },
            0.08
          )
        )
        .then(() => {
          this.$parent.$emit("test");
        });
    }
  },
  mounted() {
    setTimeout(() => {
      this.startAnimation();
    }, 1000);
  }
};
</script>

<style lang="scss" scoped></style>
