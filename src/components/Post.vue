<template>
  <div v-for="(post, id) in posts" :key="id">
    <div v-if="post.id == this.routeParam">
      <p>
        {{ post.attributes.titreArticle }}
      </p>
      <p v-for="(section, id) in post.attributes.section" :key="id">
        {{ section.section }}
      </p>
      <img :src="url + post.attributes.img[0].img1.data.attributes.url" />
      <img :src="url + post.attributes.img[0].img2.data.attributes.url" />
    </div>
    <!-- <p>{{ posts[$route.params.id] }}</p> -->
    <!-- 
    <p>{{ posts[$route.params.id].attributes.titreArticle }}</p>
    <p>{{ posts[$route.params.id].attributes.section }}</p> -->
    <!-- <img
      :src="
        url + posts[$route.params.id].attributes.img.img2.data.attributes.url
      "
    /> -->

    <!-- <p>{{ posts[$route.params.id].attributes.img }}</p> -->
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
      routeParam: this.$route.params.id,
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
