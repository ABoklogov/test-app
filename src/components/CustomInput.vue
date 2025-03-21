<template>
  <div class="input" ref="input">
    <label :for="$attrs.label">{{ $attrs.label }}</label>
    <input
      v-bind="$attrs"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      :invalid="!isValid"
      @blur="blurHandler"
    />

    <span v-if="!isValid" class="input__error">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref, watch, inject, onMounted, onBeforeUnmount } from 'vue';
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  errorMessage: {
    type: String,
    default: ''
  },
  rules: {
    type: Array,
    default: () => []
  }
});

defineOptions({
  inheritAttrs: false
});

const emit = defineEmits(['update:value']);
const { form, registerInput, unRegisterInput } = inject('form');

const input = ref(null);
const isFirstInput = ref(true);
const isValid = ref(true);
const error = ref('');

onMounted(() => {
  if (!form.value) return;
  registerInput({
    input: input.value,
    isValid,
    validate,
    reset
  });
});

onBeforeUnmount(() => {
  if (!form.value) return;
  unRegisterInput(input.value);
});

watch(
  () => props.value,
  () => {
    if (isFirstInput.value) return;
    validate();
  }
);

const validate = () => {
  return (isValid.value = props.rules.every((rule) => {
    const { hasPassed, message } = rule(props.value);

    if (!hasPassed) {
      error.value = message || props.errorMessage;
    }

    return hasPassed;
  }));
};

const blurHandler = () => {
  if (isFirstInput.value) validate();
  isFirstInput.value = false;
};

const reset = () => {
  isFirstInput.value = true;
  isValid.value = true;
  emit('update:value', '');
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.input {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  & label {
    font-size: 13px;
    color: $black;
  }
  & input {
    width: 100%;
    border: 1px solid $gray;
    border-radius: 8px;
    padding: 10px 20px;
  }
  & input::placeholder {
    color: $blackGray;
  }
  & input:focus {
    border: 1px solid $blue;
  }
  &__error {
    font-size: 12px;
    position: absolute;
    top: 100%;
    left: 0;
    color: $blue;
  }
}
</style>
