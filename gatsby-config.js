module.exports = {
  siteMetadata: {
    defaultTitle: `Gatsby and WordPress Demo Starter`,
    defaultDescription: `Demo starter for combining Gatsby and WordPress. Created for the LinkedIn Learning course "Building a Headless WordPress Site with Gatsby" and based on Gatsby Default Starter by @gatsbyjs`,
    author: `@mor10`,
    siteUrl: `https://ethiocatholicaddis.org`,
    logo: `/logo.png`,
    twitter: `@mor10`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://ethiocatholicaddis.org/wordpress_o/graphql",
        schema: {
          timeout: 80000,
        },
      },
    },
    "gatsby-plugin-postcss",

    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
