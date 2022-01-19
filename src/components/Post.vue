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
  <div v-for="(post, id) in posts" :key="id">
    <div v-if="post.id == this.routeParam">
      <!-- navbar -->
      <div class="header">
        <div class="title">
          <h1>
            {{ post.attributes.titreArticle }}
          </h1>
        </div>
        <div class="details">
          <div class="date">
             <h3>{{ post.attributes.createdAt }}</h3>
          </div>
          <div class="categorie">
            <!-- <h3>{{ post.attributes.categorieArticle }}</h3> --> <!-- api n'existe pas -->
            <div class="temporaryStatic">
              Catégorie
            </div>
          </div>
        </div>
      </div>
      <div class="headerImg">
        <img :src="url + post.attributes.img[0].img1.data.attributes.url" />
      </div>

      <div class="postContent">
        <div class="sectionSummary">
          <h3 v-for="(section, id) in post.attributes.section" :key="id">
            {{ section.section }}
          </h3>
        </div>
        <div class="content">
          <div class="title">
            <h3>
              {{ post.attributes.titreArticle }}
            </h3>
          </div>
          <div class="description">
            <p>{{ post.attributes.description }}</p>
          </div>
          <div class="image">
            <img :src="url + post.attributes.img[0].img2.data.attributes.url" />
          </div>
        </div>
      </div>

      <!-- footer -->

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
