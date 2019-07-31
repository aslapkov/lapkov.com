module.exports = {
  siteMetadata: {
    title: `A. Lapkov`,
    description: `My personal site built with Gatsby. Here you can find my works and projects that I lead.`,
    author: `A. Lapkov`,
    siteUrl: 'https://lapkov.com',
    siteLinks: [
      {
        id: 1,
        name: `About`,
        slug: `/`,
      },
      {
        id: 2,
        name: `Skills`,
        slug: `/skills/`,
      },
      {
        id: 3,
        name: `Works`,
        slug: `/works/`,
      },
      {
        id: 4,
        name: `Experience`,
        slug: `/experience/`,
      },
      {
        id: 5,
        name: `Contacts`,
        slug: `/contact/`,
      },
    ],
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
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`300`, `300i`, `400`, `400i`, `700`, `700i`],
          },
          {
            family: `Hind`,
            variants: [`400`, `400i`, `500`, `500i`, `700`, `700i`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#e91e63`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
};
