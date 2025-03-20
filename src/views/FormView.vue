<template>
  <main>
    <CustomForm class="form" @submit.prevent="submitData" ref="dataForm">
      <div class="form__input">
        <CustomInput
          name="name"
          id="name"
          label="ФИО"
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
          type="email"
          autocomplete="email"
          :rules="emailRules"
          v-model:value="formData.email"
        />
      </div>

      <CustomButton
        type="submit"
        aria-label="Отправить данные"
        class="form__btn"
        :label="'Отправить'"
        :loading="loading"
      />
    </CustomForm>
  </main>
</template>

<script setup lang="ts">
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
import { ref, computed } from 'vue';

const store = useDataStore();
const { error, loading, formData } = storeToRefs(useDataStore());

const dataForm = ref(null);


const nameRules = computed(() => {
  return [isRequired, charLimit(30), nameValidation];
});
const dateRules = computed(() => {
  return [isRequired, charLimit(10), dateValidation];
});
const phoneRules = computed(() => {
  return [charLimit(12), phoneValidation];
});
const emailRules = computed(() => {
  return [emailValidation];
});

const submitData = async () => {
  console.log("🚀 ~ submitData ~ dataForm:", formData.value)
  const isVolidForm = dataForm.value.validate();

  if (!isVolidForm) {
    return;
  }

  await store.fetchData(formData.value);

  if (!error.value) {
    dataForm.value.reset();
  }
};
</script>
