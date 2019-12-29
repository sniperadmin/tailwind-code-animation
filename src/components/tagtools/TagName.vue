<template>
  <div class="inline-block" :class="textColor">
    <span>{{ tagName }} &#160;</span>
  </div>
</template>

<script>
export default {
  name: "tag-name",
  props: {
    textColor: {
      type: String,
      default: "code-red"
    },
    tagName: {
      type: String,
      default: "div"
    }
  }
};
</script>
