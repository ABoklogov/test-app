
<template>
  <button
    class="button"
    type="button"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <VueSpinner v-if="loading" color="#140d0c"/>
    <span v-else>{{ label }}</span>
  </button>
</template>

<script setup>
import { VueSpinner } from 'vue3-spinners';
defineProps({
  loading: {
    type: Boolean
  },
  disabled: {
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
  display: flex;
  min-width: 115px;
  padding: 10px 20px;
  cursor: pointer;
  background: linear-gradient(95deg, rgba(247,253,247,1) 0%, rgba(206,231,206,1) 33%);
  border: none;
  border-radius: 8px;;
}

.button:hover {
  background: linear-gradient(95deg, rgba(202,230,201,1) 0%, rgba(149,211,147,1) 33%);
}

.button:active {
  background: $green;
}

.button:disabled {
  background: $lightGray;
}

.button span {
  color: $black;
  font-weight: 800;
}

.button:hover span {
  color: $white;
}

.button:disabled span {
  color: $blackGray;
}
</style>
