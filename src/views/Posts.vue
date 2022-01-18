<template>
  <div v-for="(post, index) in posts" :key="index">
    <div class="article">
      <div class="header">
        <div class="title">
          <h1>{{ post.attributes.titreInfo }}</h1>
        </div>
        <div class="details">
          <h3>{{ post.attributes.titreInfo }}</h3>
        </div>
      </div>
      <div class="image">
        <img :src="url + post.attributes.img[0].img1.data.attributes.url" />
      </div>
      <div class="content">
        <p>{{ post.attributes.titreInfo }}</p>
        <p>{{ post.attributes.description }}</p>
        <div class="seeMore">
          <small> lire la suite </small>
          <router-link :to="{ path: '/post/' + post.id }">lire la suite</router-link>
        </div>
      </div>
      <hr />
    </div>
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
