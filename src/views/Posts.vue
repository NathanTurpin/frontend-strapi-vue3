<template>
  <div>
    <body v-for="(post, index) in posts" :key="index"  class="article">
      <div class="header">
        <div class="categorie">
          <h3>catagorie</h3>
        </div>
        <div class="date">
          <h3>{{ post.attributes.createdAt.slice(0, 10) }}</h3>
        </div>
      </div>

      <div class="image">
        <img :src="url + post.attributes.imgDescription.data.attributes.url" />
      </div>

      <div class="title">
        <h1>{{ post.attributes.titreInfo }}</h1>
      </div>
      <div class="details">
        <h3>{{ post.attributes.description }}</h3>
      </div>

      <div class="seeMore">
        <router-link :to="{ path: '/post/' + post.id }">lire la suite</router-link>
      </div>
      
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
