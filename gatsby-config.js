module.exports = {
  siteMetadata: {
    title: `Aleksandr Lapkov`,
    description: `My personal site built with Gatsby. Here you can find my works and projects that I lead.`,
    author: `A. Lapkov`,
    siteUrl: 'https://lapkov.com',
    siteLinks: [
      {
        id: 1,
        name: `About`,
        slug: `about`,
      },
      {
        id: 2,
        name: `Works`,
        slug: `works`,
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
