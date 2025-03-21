<template>
  <header>
    <nav>
      <RouterLink to="/">Форма</RouterLink>
      <RouterLink to="/data">Данные</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
nav a.router-link-exact-active {
  color: $black;
  border-bottom: 2px solid $green;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    padding: 1rem 0;
  }
}
</style>
