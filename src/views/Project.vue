<template>
  <div class="projectNav">
    <div class="temporaryStatic">
      <h3>Tous les projets</h3>
      <h3>Bureaux</h3>
      <h3>Restaurant</h3>
      <h3>Médical</h3>
      <h3>Industrie</h3>
    </div>
  </div>
  <div class="projectItems">
    <div class="temporaryStatic">
      <div class="projectId">
        01
      </div>
      <div class="projectName">
        <div class="temporaryStatic">
          <router-link :to="{ path: '/projects/details' }">
              Nom Projet
          </router-link>
        </div>
       <!-- <router-link :to="{ path: '/projects/' + project.id }">{{ project.attributes.projectName }}</router-link> --> <!-- pour plustard -->
      </div>
      <div class="projectImage">
        <div class="backgroundImage">
          <img src="" alt="" srcset="">
        </div>
        <div class="displayImage">
          <img src="" alt="" srcset="">
        </div>
      </div>
    </div>

    <div class="temporaryStatic">
      <div class="projectId">
        02
      </div>
      <div class="projectName">
        <div class="temporaryStatic">
          <router-link :to="{ path: '/projects/details' }">
              Nom Projet
          </router-link>
        </div>
       <!-- <router-link :to="{ path: '/projects/' + project.id }">{{ project.attributes.projectName }}</router-link> --> <!-- pour plustard -->
      </div>
      <div class="projectImage">
        <div class="backgroundImage">
          <img src="" alt="" srcset="">
        </div>
        <div class="displayImage">
          <img src="" alt="" srcset="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>