<template>
  <div class="container">
    <h1 class="title">{{title}}</h1>
    <div class="nav-wrapper">
      <el-menu 
        mode="horizontal" 
        :default-active="activeIndex"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#267aff">
        <el-menu-item index="1" @click.native="handleClickNav('')">
          <span>Users</span>
          <!-- <nuxt-link to="/users">Users</nuxt-link> -->
        </el-menu-item>
        <el-menu-item index="2" @click.native="handleClickNav('1')">
          <span>Users1</span>
          <!-- <nuxt-link to="/users/1">User1</nuxt-link> -->
        </el-menu-item>
        <el-menu-item index="3" @click.native="handleClickNav('2')">
          <span>Users2</span>
          <!-- <nuxt-link to="/users/2">User2</nuxt-link> -->
        </el-menu-item>
        <el-menu-item index="4" @click.native="handleClickNav('3')">
          <span>Users3</span>
          <!-- <nuxt-link to="/users/3">User3</nuxt-link> -->
        </el-menu-item>
        <el-menu-item index="5" @click.native="handleClickNav('4')">
          <span>Users4</span>
          <!-- <nuxt-link to="/users/4">User4</nuxt-link> -->
        </el-menu-item>
        <el-menu-item index="6" @click.native="handleClickNav('5')">
          <span>User5</span>
          <!-- <nuxt-link to="/users/5">User5</nuxt-link> -->
        </el-menu-item>
      </el-menu>
    </div>
    <transition name="fade" mode="out-in">
      <nuxt-child />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Nuxt Users',
      activeIndex: '1'
    }
  },

  watch: {
    '$route'(to, from) {
      this.setActiveIndex()
    }
  },

  methods: {
    setActiveIndex() {
      let params = this.$route.params
      console.log(params)
      if (params.id) {
        this.activeIndex = (Number(params.id) + 1).toString()
      } else {
        this.activeIndex = '1'
      }
    },

    // 跳转动态路由页
    handleClickNav(id) {
      this.$router.push({path: id ? `/users/${id}.html` : '/users'})
    }
  },
  mounted() {
    this.setActiveIndex()
  }
}
</script>

<style lang="scss" scoped>
</style>
