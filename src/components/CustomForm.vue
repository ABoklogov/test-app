<template>
  <form ref="form" class="form">
    <slot></slot>
  </form>
</template>

<script setup>
import { provide, ref } from 'vue';

const form = ref(null);
const inputs = ref([]);

const registerInput = (input) => {
  inputs.value.push(input);
};

const unRegisterInput = (input) => {
  inputs.value.filter((item) => item !== input);
};

const validate = () => {
  return inputs.value.reduce((isValid, input) => {
    const isInputValid = input.validate();

    return isValid && isInputValid;
  }, true);
};

const reset = () => {
  inputs.value.forEach((input) => input.reset());
};

provide('form', {
  form,
  registerInput,
  unRegisterInput
});

defineExpose({
  reset,
  validate
});
</script>

<style lang="scss" scoped>
.form {
  min-width: auto;
}

@media (min-width: 768px) {
  .form {
    min-width: 320px;
  }
}
</style>
