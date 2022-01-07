<template>
  <div v-for="post in posts" :key="post.Title">
    <p>{{ post.attributes.titreInfo }}</p>
    <p>{{ post.attributes.description }}</p>
    <img :src="url + post.attributes.img[0].img1.data.attributes.url" />
    <hr />
    <p>{{ post.attributes.titreArticle }}</p>
    <p>{{ post.attributes.section }}</p>
    <img :src="url + post.attributes.img[0].img2.data.attributes.url" />

    <p>{{ post.attributes.img[0].img2 }}</p>
  </div>
</template>

<script>
// import { ref } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import postsQuery from "../graphql/posts.query.gql";
// import axios from "axios";

export default {
  setup() {
    const { result } = useQuery(postsQuery);
    const posts = useResult(result, null, (data) => data.posts.data);
    console.log(posts);
    return { posts };
  },
  data() {
    return {
      url: process.env.VUE_APP_URL,
    };
  },
  mounted() {
    // axios
    //   .get(process.env.VUE_APP_URL_API + "posts")
    //   .then((res) => console.log(res));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
