<template>
  <div class="post">
    <div class="container">
      <div v-for="(post, id) in posts" :key="id">
        <div v-if="post.id == this.routeParam">
          <div class="title-header">
            <!-- titre article -->
            <h1 class="title">
              {{ post.attributes.titreArticle }}
            </h1>
            <div class="header">
              <h3 class="category">Catégorie</h3>
              <h3 class="date">{{ post.attributes.createdAt.slice(0, 10) }}</h3>
            </div>
          </div>

          <!-- img header  -->
          <img
            v-if="post.attributes.headerImg"
            :src="url + post.attributes.headerImg.img1.data.attributes.url"
            class="header-img"
          />

          <!-- section  -->
          <div class="section-links">
            <a v-for="(section, id) in post.attributes.section"
               :key="id" :href="'#id' + id" class="section-link">{{ section.titreSection }}</a>
          </div>
          <div class="section">
            <section
              :id="'id' + id"
              v-for="(section, id) in post.attributes.section"
              :key="id"
            >
              <!-- titre section  -->
              <h2 v-if="section.titreSection" class="section-title">
                {{ section.titreSection }}
              </h2>
              <p v-if="section.section" class="section-content">
                <!-- section  -->
                {{ section.section }}
              </p>
              <!-- section img  -->
              <img
                v-if="section.imgSection.data"
                :src="url + section.imgSection.data.attributes.url"
                :alt="section.imgSection.data.attributes.alternativeText"
                class="section-img"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
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
      routeParam: this.$route.params.id
    };
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
