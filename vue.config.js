module.exports = {
  // A CHAQUE FOIS QU ON USE GRAPhQL OU GQL VA CHARGER GRAPHQL-TAG/LOADER
  chainWebpack: (config) => {
    config.module
      .rule("graphql")
      .test(/\.(graphql|gql)$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end();
  },
};
