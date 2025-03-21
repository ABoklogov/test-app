<template>
  <main>
    <CustomForm class="form" @submit.prevent="submitData" ref="form">
      <div class="form__input">
        <CustomInput
          name="name"
          id="name"
          label="ФИО"
          placeholder="Введите ФИО"
          type="text"
          autocomplete="name"
          v-model:value="formData.name"
          :rules="nameRules"
        />
      </div>
      <div class="form__input">
        <CustomInput
          name="date"
          id="date"
          label="Дата Рождения"
          placeholder="Введите дату рожрения"
          type="date"
          autocomplete="date"
          :rules="dateRules"
          v-model:value="formData.date"
        />
      </div>
      <div class="form__input">
        <CustomInput
          name="phone"
          id="phone"
          label="Номер Телефона"
          placeholder="Введите телефон"
          type="tel"
          autocomplete="tel"
          :rules="phoneRules"
          v-model:value="formData.phone"
        />
      </div>
      <div class="form__input">
        <CustomInput
          name="email"
          id="email"
          label="Электронная почта"
          placeholder="Введите почту"
          type="email"
          autocomplete="email"
          :rules="emailRules"
          v-model:value="formData.email"
        />
      </div>

      <div class="form__input">
        <CustomButton
          type="submit"
          aria-label="Отправить данные"
          class="form__btn"
          :disabled="disabled"
          :label="'Отправить'"
          :loading="loading"
        />
      </div>
    </CustomForm>
  </main>
</template>

<script setup>
import { useDataStore } from '@/stores/data';
import { storeToRefs } from 'pinia';
import CustomInput from '@/components/CustomInput.vue';
import CustomForm from '@/components/CustomForm.vue';
import CustomButton from '@/components/CustomButton.vue';
import {
  isRequired,
  charLimit,
  nameValidation,
  dateValidation,
  phoneValidation,
  emailValidation,
} from '@/utils/validationRules';
import { ref, computed, watch } from 'vue';

const store = useDataStore();
const { loading, formData } = storeToRefs(useDataStore());

const form = ref(null);
const disabled = ref(true);

const nameRules = computed(() => {
  return [isRequired, charLimit(30), nameValidation];
});
const dateRules = computed(() => {
  return [isRequired, charLimit(10), dateValidation];
});
const phoneRules = computed(() => {
  return [isRequired, charLimit(11), phoneValidation];
});
const emailRules = computed(() => {
  return [isRequired, emailValidation];
});

watch(formData, () => {
  disabled.value = Object.values(formData.value).some(el => !el)
}, {deep: true, immediate: true});

const submitData = async () => {
  const isValidForm = form.value.validate();

  if (!isValidForm) {
    disabled.value = true
    return;
  }

  await store.submitData({
    name: formData.value.name.trim(),
    date: formData.value.date.trim(),
    phone: formData.value.phone.trim(),
    email: formData.value.email.trim(),
  });

  form.value.reset();
};
</script>

<style lang="scss" scoped>
.form {
  &__input {
    margin-top: 40px;
  }
}

.form__input button {
  width: 100%;
}
@media (min-width: 768px) {
  .form__input button {
    width: auto;
  }
}
</style>
