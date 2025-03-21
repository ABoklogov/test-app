<template>
  <table>
    <tr>
      <th>ФИО</th>
      <th>Дата Рождения</th>
      <th>Номер Телефона</th>
      <th>Электронная почта</th>
    </tr>
    <tr v-for="user in users" :key="user.id">
      <td v-for="(item, key) in user" :key="item">
        <span v-if="key !== 'id'">{{ item }}</span>
      </td>
    </tr>
  </table>
</template>

<script setup>
import { useDataStore } from '@/stores/data';
import { storeToRefs } from 'pinia';
const { users } = storeToRefs(useDataStore());
</script>

<style scoped>
</style>
