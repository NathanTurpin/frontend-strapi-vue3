<template>
  <div>
    <Nav />

    <router-view />
  </div>
</template>
<style>
@import '../styles/normalize.css';
@import '../styles/style.css';
</style>
<script>
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Nav
  }
};
</script>