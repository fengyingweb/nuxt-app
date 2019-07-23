<template>
  <div class="container">
    <h1 class="title1">404 Not Found</h1>
    <div class="link-wrapper">
      <nuxt-link to="/">返回首页</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
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
