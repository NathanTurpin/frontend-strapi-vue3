<template>
  <div v-for="(post, id) in posts" :key="id">
    {{ post }}
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.$store
      .dispatch("Posts/fetchPosts")
      .then((response) => (this.posts = response));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
