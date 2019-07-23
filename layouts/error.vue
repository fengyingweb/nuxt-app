<template>
  <div class="error-wrapper">
    <h1 class="title1" v-if="statusCode === 404">404页面不存在</h1>
    <h1 class="title1" v-else>500服务器错误</h1>
    <div class="link-wrapper">
      <nuxt-link to="/">返回首页</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },

  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },

    message() {
      return this.error.message;
    }
  },

  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalabel=no'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .error-wrapper {
    width: 100%;
  }

  .title1 {
    padding: 50px 0;
    font-size: 36px;
    color: #f56c6c;
    text-align: center;
  }
  .link-wrapper {
    padding: 20px 0;
    text-align: center;
    font-size: 24px;

    a {
      text-decoration: none;
      color: #267aff;
    }
  }
</style>
