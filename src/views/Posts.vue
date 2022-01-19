<template>
  <div>
    <body v-for="(post, index) in posts" :key="index">
      <!-- {{ post.attributes.imgDescription.data.attributes.url }} -->
      <p>{{ post.attributes.titreInfo }}</p>

      <img :src="url + post.attributes.imgDescription.data.attributes.url" />

      <p>{{ post.attributes.description }}</p>
      <p>{{ post.attributes.createdAt.slice(0, 10) }}</p>

      <router-link :to="{ path: '/post/' + post.id }"
        >lire la suite</router-link
      >
      <hr />
    </body>
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
div {
  display: flex;
  flex-direction: column-reverse;
}
</style>
