import { createApp, h, provide } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { DefaultApolloClient } from "@vue/apollo-composable";

// CREER LE CLIENT APPOLO POUR TAPER SUR L API
const defaultClient = new ApolloClient({
  uri: process.env.VUE_APP_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

// CREER LE CLIENT POUR TOUS LES ENFANTS + SETUP VUE.CONFIG.JS
createApp({
  setup() {
    provide(DefaultApolloClient, defaultClient);
  },
  render() {
    return h(App);
  },
})
  .use(store)
  .use(router)
  .mount("#app");
