<template>
  <div class="modal">
    ФИО: {{ user.name }} <br>
    Дата рождения {{ user.date }}<br>
    Номер {{ user.phone }}<br>
    Эл.почта {{ user.email }}<br>
    <button @click="closeModal">закрыть</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useDataStore } from '@/stores/data';
import { storeToRefs } from 'pinia';
const store = useDataStore();
const { currentId, users } = storeToRefs(useDataStore());

const user = computed(() => {
  return users.value.find(el => el.id === currentId.value);
});
const closeModal = () => {
  store.setCurrentId('');
}
</script>

<style scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 500px;
  height: 500px;
  background-color: #fff;
  border: 1px solid black;
  padding: 10px;

  & button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>

