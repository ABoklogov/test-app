<template>
  <div>


    <table>
      <tr class="header">
        <th>ФИО</th>
        <th>Дата рождения</th>
        <th>Номер телефона</th>
        <th>Электронная почта</th>
      </tr>
      <tr v-for="user in users" :key="user.id" @click="() => onShowModal(user.id)">
        <template v-for="(item, key) in user" :key="item">
          <td v-if="key !== 'id'">
            {{ item }}
          </td>
        </template>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { useDataStore } from '@/stores/data';
import { storeToRefs } from 'pinia';
const store = useDataStore();
const { users } = storeToRefs(useDataStore());

const onShowModal = (id) => {
  store.showModal(id);
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
table {
  border-collapse: collapse;
}
th {
  background: $lightGray;
}
td {
  background: $white;
  text-align: center;
}
th, td {
  border: 1px solid $gray;
  padding: 4px;
}
tr {
  cursor: pointer;
}
@media (min-width: 1024px) {
  table {
    width: 1000px;
  }
}
</style>
