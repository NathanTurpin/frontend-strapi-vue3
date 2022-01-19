<template >
  <div>
    <Nav />

    <router-view />
  </div>
</template>
<style>
@font-face {
  font-family: "Gallery";
  src: local("Gallery"),
  url(./fonts/GalleryModern.woff2) format("woff2");
}
@font-face {
  font-family: "Mulish";
  src: local("Mulish"),
  url(./fonts/Mulish-Regular.woff2) format("woff2");
}
body {
  background: #f5efe8;
}
</style>
<script>
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>

<style >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
</style>
