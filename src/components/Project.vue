<template>
  <div class="projectdetail" v-for="projet in projets" :key="projet.id">
    <div v-if="projet.id == this.routeParam">
      <div class="projectHeader">
        <div class="projectTitle">
          <h1>{{ projet.attributes.titreProjet }}</h1>
        </div>
        <img
          v-if="projet.attributes.imgProjet"
          :src="url + projet.attributes.imgProjet.data.attributes.url"
          class="header-img"
        />
        <div class="projectDescription">
          <h3>{{ projet.attributes.sectionProjet.titreSection }}</h3>
        </div>
        <div
          v-for="(imgsection, index) in projet.attributes.sectionProjet"
          :key="index"
        >
          {{ imgsection.titreSection }}
          <div v-for="(img, index) in imgsection.imgSection.data" :key="index">
            <img :src="url + img.attributes.url" class="header-img" />
          </div>
          <p>
            {{ imgsection.textSection }}
          </p>
        </div>

        <!-- <div class="projectDetails">
          <div class="projectDate">Projet réalisé en 2017</div>
          <div class="projectPlace">Arras, 62000</div>
        </div>
        <div class="projectHeaderImage">
          <img src="" alt="" srcset="" />
        </div> -->
      </div>

      <div
        v-for="(imgDescription, index) in projet.attributes.imgDescription.data"
        :key="index"
      >
        <img :src="url + imgDescription.attributes.url" class="header-img" />
      </div>

      <!-- 
      <div class="projectSection">
        <div class="projectTitleSection">
          <h2>Title section</h2>
        </div>
        <div class="ProjectSectionText">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>

      <div class="projectImageSection">
        <img src="" alt="" srcset="" />
      </div>

      <div class="projectDualImageSection">
        <div class="leftImage">
          <img src="" alt="" />
        </div>
        <div class="rightImage">
          <img src="" alt="" />
        </div>
      </div>

      <div class="projectSection">
        <div class="projectTitleSection">
          <h2>Title section</h2>
        </div>
        <div class="ProjectSectionText">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>

      <div class="projectImageSection">
        <img src="" alt="" srcset="" />
      </div>

      <div class="projectDescriptionSection">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
        <div class="horizontalScroll">
          <img class="img1" src="" alt="" srcset="" />
          <img class="img2" src="" alt="" srcset="" />
          <img class="img3" src="" alt="" srcset="" />
          <img class="img4" src="" alt="" srcset="" />
        </div>
        <div class="nextProject">
          <h1>Projet suivant</h1>
        </div>
      </div>

      <div class="lowerProjectImage">
        <img class="img1" src="" alt="" srcset="" />
        <img class="img2" src="" alt="" srcset="" />
        <img class="img3" src="" alt="" srcset="" />
      </div> -->
    </div>
  </div>
</template>

<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import projetsQuery from "../graphql/projets.query.gql";

export default {
  setup() {
    const { result } = useQuery(projetsQuery);
    const projets = useResult(result, null, (data) => data.projets.data);
    console.log(projets);
    return { projets };
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

<style>
</style>
