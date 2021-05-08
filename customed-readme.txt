new project gatsby

=================================================================
============= Imp Docs and URLs =================================

https://react-bootstrap.github.io/components/navbar/#navbars-brand

https://www.gatsbyjs.com/docs/quick-start/

https://uicolorpicker.com/

https://graphql.org/

https://react-icons.github.io/react-icons/

https://www.contentful.com/sign-up/

https://app.snipcart.com/register

https://www.gatsbyjs.com/plugins/gatsby-plugin-snipcart/?=snipca

https://formspree.io/

=================================================================
============= installation ======================================

> sudo npm install -g gatsby-cli

=================================================================
============= New Project =======================================

gatsby new <project-name>
    |-> gatsby new booEcomm


=================================================================
============= Deploy Project on localhost to start ==============
> cd booEcomm
> gatsby develop

=================================================================


=================================================================
======================== ReactJs ================================
ReactJs
prop  --> it is like truck/ container  takes data somewhere
state --> container only throgh which you can modify object

====================== React Icons ==============================
---> https://react-icons.github.io/react-icons/
> npm install react-icons

===============================================================
===============================================================
====================== Gatsby Plugins =========================

====================== Gatsby Background Image Plugins ==============================

---> https://www.gatsbyjs.com/plugins/gatsby-background-image/
> npm install gatsby-background-image


====================== Gatsby Contentfull(APi-db) delivery Plugins ==============================
---> https://www.gatsbyjs.com/plugins/gatsby-source-contentful/

> npm install gatsby-source-contentful
 ---> gatsby-config
      require('dotenv').config({
             path:`.env.development`,
                })

 
                    {
                    resolve: `gatsby-source-contentful`,
                    options: {
                    spaceId: process.env.CONTENTFUL_SPACE_ID,
                    // Learn about environment variables: https://gatsby.dev/env-vars
                    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                    },
                },


===============================================================
====================== ENV file  ==============================
>--->root(Project)
    |--> .env.development
            |---> CONTENTFUL_SPACE_ID = <your secret>
            |---> CONTENTFUL_ACCESS_TOKEN = <your secret>
            |---> SNIPCART_KEY = <your secret>


====================== Gatsby Snipcart Plugins ==============================

https://www.gatsbyjs.com/plugins/gatsby-plugin-snipcart/?=snipca

npm install gatsby-plugin-snipcart
    
        {
			resolve: 'gatsby-plugin-snipcart',
			options: {
				apiKey: process.env.SNIPCART_KEY,
                autopop:true,
			}
		},



=================== For Contact Form ====

https://formspree.io/

=================== Netlify deploy ====

github and netlify must have same email id
