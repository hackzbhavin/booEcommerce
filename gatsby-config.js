require('dotenv').config({
  path:`.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `booEcomm`,
    description: `Books Ecommerce`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId:"zf1ctm7dks8p",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken:"_OhzduiDGyM2k19LyX11kpbOq3nVZNzTEEXP9QqC_IE",
      },
    },
    {
			resolve: 'gatsby-plugin-snipcart',
			options: {
				apiKey: process.env.SNIPCART_KEY,
        autopop:true,
			}
		},
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
