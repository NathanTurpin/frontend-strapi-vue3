<template>
  <nav>
    <router-link to="/">home</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/projects">Projects</router-link>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      logo: "",
    };
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_URL_API + "menus")
      .then((response) => (this.logo = response.data));
  },
};
</script>

<style>
</style>