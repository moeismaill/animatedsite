module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'Dabbas',
    author: 'vasrush',
    description: 'A Gatsby.js V2 Starter based on Landed by HTML5 UP',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Blog',
        link: '/left-sidebar',
      },
      {
        name: 'Videos',
        link: '/right-sidebar',
      },
      {
        name: 'About Us',
        link: '/no-sidebar',
      },
      {
        name: 'Layouts',
        link: '#',
        items: [
          {
            name: 'SubMenu',
            link: '#',
            items: [
              {
                name: 'Option 1',
                link: '#',
              },
            ],
          },
        ],
      },
      {
        name: 'Elements',
        link: '/elements',
      },
      {
        name: 'Sign Up',
        link: '#',
        cl: 'button primary',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-hotjar-tracking`,
      options: {
        includeInDevelopment: false,
        id: 1639270,
        sv: 6
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
  ],
}
