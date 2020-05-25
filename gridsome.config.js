// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'TUFC',
  siteDescription: 'Turramurra United Football Club is based on the upper North Shore of Sydney, and includes the suburbs of Wahroonga, Pymble and Turramurra.',
  siteUrl: 'https://turramurraunited.com.au/',
  plugins: [
    {
      use: 'gridsome-source-wordpress',
      options: {
        baseUrl: 'https://api.turramurraunited.com.au/', // required
        apiBase: 'wp-json',
        typeName: 'Article',
        perPage: 100,
        concurrent: 10,
        routes: {
          post: '/:year/:month/:day/:slug',
          page: '/:slug',
          post_tag: '/tag/:slug',
          sponsors: '/sponsors/:slug',
        },
        splitPostsIntoFragments: true, // default false
        downloadRemoteImagesFromPosts: true, // default false
        downloadRemoteFeaturedImages: true, // default false
        // downloadACFImages: true, // default false,
        customEndpoints: [
          {
            typeName: 'Posts',
            route: '/wp/v2/posts',
            normalize: true,
          },
          {
            typeName: 'Pages',
            route: '/wp/v2/pages',
            normalize: true,
          },
        ],
      },
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      /**
      * These are the default options. You don't need to set any options to get
      * going. Seriously, you don't need to declare tailwind.config.js.

      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/exclude-me'],
        config: {
          '/news/*': {
            changefreq: 'weekly',
            priority: 0.5,
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7,
          },
        },
      },
    },
  ],
  // templates: {
  //   ArticlePost: '/news/:year/:month/:slug',
  //   ArticlePage: '/random/:slug',
  // },
};
