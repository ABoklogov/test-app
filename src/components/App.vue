<template>
  <div class="container">
    <Modal v-if="currentId"/>
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
import { useDataStore } from '@/stores/data';
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import Modal from '@/components/Modal.vue';
import { storeToRefs } from 'pinia';
const { currentId } = storeToRefs(useDataStore());
</script>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 769px) {
  .container {
    position: relative;
    min-width: 450px;
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  nav {
    padding: 1rem 0;
  }
}
</style>
