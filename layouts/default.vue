<template>
  <div id="app">
    <nux-header :active="active" :nav-list="navList"></nux-header>
    <transition name="fade" mode="out-in">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import NuxHeader from '@/components/Header'
export default {
  components: {
    NuxHeader
  },

  data() {
    return {
      navList: [
        {title: '首页', path: '/'},
        {title: '关于', path: '/about'},
        {title: '用户管理', path: '/users'}
      ],
      active: '首页'
    }
  },
  watch: {
    $route(to, from) {
      this.setNavActive()
    }
  },
  
  methods: {
    setNavActive() {
      this.navList.forEach(item => {
        if (this.$route.path.indexOf(item.path) !== -1) {
          this.active = item.title
        }
      })
    }
  },

  mounted() {
    this.setNavActive()
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

#app {
  padding-top: 60px;
}
</style>
