<template>
  <div>
    <body v-for="(post, id) in posts" :key="id">
      <div v-if="post.id == this.routeParam">
        <!-- titre article -->
        <p>
          {{ post.attributes.titreArticle }}
        </p>
        <!-- img header  -->
        <img
          v-if="post.attributes.headerImg"
          :src="url + post.attributes.headerImg.img1.data.attributes.url"
        />

        <!-- section  -->
        <section v-for="(section, id) in post.attributes.section" :key="id">
          <!-- titre section  -->
          <div v-if="section.titreSection">
            {{ section.titreSection }}
          </div>
          <div v-if="section.section">
            <!-- section  -->
            {{ section.section }}
          </div>
          <div v-if="section.imgSection.data">
            <!-- section img  -->
            <img
              :src="url + section.imgSection.data.attributes.url"
              :alt="section.imgSection.data.attributes.alternativeText"
            />
          </div>
        </section>
      </div>
    </body>
  </div>
</template>

<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import postsQuery from "../graphql/posts.query.gql";

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
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
