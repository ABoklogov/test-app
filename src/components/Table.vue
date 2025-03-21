<template>
  <table>
    <tr class="header">
      <th>ФИО</th>
      <th>Дата рождения</th>
      <th>Номер телефона</th>
      <th>Электронная почта</th>
    </tr>
    <tr v-for="user in users" :key="user.id">
      <template v-for="(item, key) in user" :key="item">
        <td v-if="key !== 'id'">
          {{ item }}
        </td>
      </template>
    </tr>
  </table>
</template>

<script setup>
import { useDataStore } from '@/stores/data';
import { storeToRefs } from 'pinia';
const { users } = storeToRefs(useDataStore());
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

@media (min-width: 1024px) {
  table {
    width: 1000px;
  }
}
</style>
