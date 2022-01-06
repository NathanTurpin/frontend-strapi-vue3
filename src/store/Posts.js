import axios from "axios";
export default {
  namespaced: true,
  state: {
    URL: process.env.VUE_APP_URL_API,
  },
  getters: {
    getUsers: (state) => {
      return state.users;
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    fetchPosts({ state }) {
      return new Promise((resolve, fail) => {
        axios
          .get(state.URL + "posts?populate=*", {})
          .then((response) => {
            console.log(response);
            resolve(response.data);
          })
          .catch((e) => {
            fail(e);
          });
      });
    },
  },
};
