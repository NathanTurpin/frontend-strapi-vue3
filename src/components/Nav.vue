<template>
  <nav>
    <router-link to="/">
      <!-- <span> {{ logo }}</span> -->
      home
    </router-link>
    darkmode burger
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