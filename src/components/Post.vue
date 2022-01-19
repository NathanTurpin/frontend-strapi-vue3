<template>
  <div>
    <body v-for="(post, id) in posts" :key="id">
      <div v-if="post.id == this.routeParam">
        <!-- titre article -->
        <div class="header">
          <div class="title">
            <h1>
              {{ post.attributes.titreArticle }}
            </h1>
          </div>
          <div class="details">
            <div class="categorie">
              <h3>catagorie</h3>
            </div>
            <div class="date">
              <h3>{{ post.attributes.createdAt.slice(0, 10) }}</h3>
            </div>
          </div>
        </div>
        <div class="headerImg">
          <!-- img header  -->
          <img
            v-if="post.attributes.headerImg"
            :src="url + post.attributes.headerImg.img1.data.attributes.url"
          />
        </div>

        <!-- section  -->
        <div class="sectionContent">
          <div v-for="(section, id) in post.attributes.section" :key="id" class="left">
            <h3 v-if="section.titreSection" class="sectionSummary">
              {{ section.titreSection }}
            </h3>
          </div>
          <div class="right">
            <section v-for="(section, id) in post.attributes.section" :key="id" class="postContent">
              <!-- titre section  -->
              <h3 v-if="section.titreSection" class="title">
                {{ section.titreSection }}
              </h3>
              <p v-if="section.section" class="content">
                <!-- section  -->
                {{ section.section }}
              </p>
              <div v-if="section.imgSection.data" class="image">
                <!-- section img  -->
                <img 
                  :src="url + section.imgSection.data.attributes.url"
                  :alt="section.imgSection.data.attributes.alternativeText"
                />
              </div>
            </section>
          </div>

        </div>
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
