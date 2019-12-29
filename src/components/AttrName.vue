<template>
  <div class="d-flex inline-block" :class="codeColor">
    <slot>
      <div class="ml-2">class</div>
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
