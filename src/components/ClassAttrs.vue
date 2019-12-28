<template>
  <div :ref="reference" class="inline-block code-green">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "class-attrs",
  props: {
    reference: {
      type: String,
      default: null
    }
  }
};
</script>
