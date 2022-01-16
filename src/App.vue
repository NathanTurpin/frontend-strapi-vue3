<template>
  <Nav />
  <!-- {{ posts }} -->

  <!-- 
  <img
    src="http://localhost:1337/uploads/maxresdefault_060d7cbb9f.jpg"
    alt=""
  /> -->
  <router-view />
</template>
<style>
@font-face {
  font-family: "Gallery";
  src: local("Gallery"),
  url(./fonts/GalleryModern/gallerymodern-webfont.ttf) format("truetype");
}
body {
  background: #f5efe8;
}
</style>
<script>
import Nav from "@/components/Nav.vue";
// import { ref } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import postsQuery from "./graphql/posts.query.gql";
// import axios from "axios";

export default {
  components: {
    Nav,
  },
  setup() {
    const { result } = useQuery(postsQuery);
    const posts = useResult(result, null, (data) => data.posts);
    return { posts };
  },
  mounted() {
    // axios
    //   .get(process.env.VUE_APP_URL_API + "posts")
    //   .then((res) => console.log(res));
  },
};
</script>

