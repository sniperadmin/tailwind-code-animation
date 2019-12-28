<template>
  <div class="inline-block" :class="codeColor">
    <slot>
      class
    </slot>
  </div>
</template>

<script>
export default {
  name: "attr-name",
  props: {
    codeColor: {
      type: String,
      default: "code-yellow"
    }
  }
};
</script>
