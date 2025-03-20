
<template>
  <button
    class="button"
    type="button"
    @click="$emit('click')"
  >
    <span v-if="loading">загрузка</span>
    <span v-else>{{ label }}</span>
  </button>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean
  },
  label: {
    type: String
  },
});
defineEmits(['click']);
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.button {
  // display: flex;
  // border: none;
  // font: inherit;
  // color: inherit;
  // padding: 0;
  // background-color: transparent;
  // cursor: pointer;
}
</style>
