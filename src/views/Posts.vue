<template>
  <div class="posts">
    <div class="container">
      <div v-for="(post, index) in posts" :key="index" class="post">
        <div class="header">
          <h3 class="category">Catégorie</h3>
          <h3 class="date">{{ post.attributes.createdAt.slice(0, 10) }}</h3>
        </div>

        <img :src="url + post.attributes.imgDescription.data.attributes.url" alt="Illustration du post" />

        <h1>{{ post.attributes.titreInfo }}</h1>
        <p class="details">{{ post.attributes.description }}</p>

        <div class="read-more">
          <router-link :to="{ path: '/post/' + post.id }">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
              <path
                d="M-8.49052e-09 6.89658C1.28839 6.89658 2.55172 7.0332 3.83696 7.07752C5.47472 7.13399 7.10243 6.99237 8.73826 6.99237C10.858 6.99237 12.9796 6.89658 15.103 6.89658C16.2951 6.89658 17.4872 6.89658 18.6792 6.89658C19.3163 6.89658 19.9693 6.705 20.595 6.705"
                stroke="black" />
              <path
                d="M16.4136 12.8848C17.0782 12.3813 17.7794 11.7076 18.1867 10.9744C18.4026 10.5857 18.6937 10.2588 18.9175 9.88008C19.0872 9.59285 19.1991 9.2805 19.3812 8.99723C19.8822 8.21785 20.2581 7.36359 20.9169 6.70476C21.2709 6.35079 20.3965 5.53099 20.1527 5.2729C19.6573 4.74835 19.3219 4.05096 18.7431 3.59622C18.1606 3.13852 17.6373 2.57733 17.1332 2.05307C16.8156 1.72274 16.3492 1.40492 16.1465 0.999579"
                stroke="black" />
            </svg>
            <span>Lire l'article</span>
          </router-link>
        </div>

      </div>
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
      url: process.env.VUE_APP_URL
    };
  },
  mounted() {
    // axios
    //   .get(process.env.VUE_APP_URL_API + "posts")
    //   .then((res) => console.log(res));
  }
};
</script>