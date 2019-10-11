
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://hm.baidu.com/hm.js?7daac41ef5a814fc08b89be509a29d2a' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#267aff',
    failedColor: '#f56c6c'
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@assets/styles/base.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/baidu'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  * 服务端渲染请求接口不需要代理
  */
  // axios: {
  //   // See https://github.com/nuxt-community/axios-module#options
  //   proxy: true
  // },

  // proxy: {
  //   '/api': {
  //     target: 'http://localhost:3000',
  //     logLevel: 'debug',
  //     changeOrigin: true
  //   }
  // },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    // publicPath: '/static/',
    extractCSS: true,
    
    // 按需引入element-ui
    babel: {
      plugins: [
        [
          'component',
          { libraryName: 'element-ui', styleLibraryName: 'theme-chalk' }
        ]
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  server: {
    port: 8080,
    host: 'localhost'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  generate: {
    subFolders: true, // 设置为false时, 生成的html文件名会安照路由路径, 但是开启本地服务刷新页面时会找不到页面的问题
    routes: function() { // 配置运行npm run generate时动态路由生成对应的静态文件
      return new Promise((resolve, reject)=> {
        let userIdList = ['1', '2', '3', '4', '5']
        let userRoutes = userIdList.map((userId)=> {
          return '/users/' + userId
        })
        resolve(userRoutes)
      })
    }
  }
}
