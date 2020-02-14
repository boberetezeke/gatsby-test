/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {    
    title: `Sortilege`,  
  },

  plugins: [    
    `gatsby-transformer-remark`,
    {      
        resolve: `gatsby-source-filesystem`,      
        options: {        
          path: `${__dirname}/src/pages/blog-entries`,        
          name: 'pages',      
        },    
    }  
  ],
}
