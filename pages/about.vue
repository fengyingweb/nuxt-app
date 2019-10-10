<template>
  <div class="container">
    <h1 class="title">{{title}}</h1>
    <p class="desc">{{desc}}</p>
    <div class="state-wrapper">
      <h3 class="title3">{{list}}</h3>
      <div class="btn-box">
        <el-button type="success" plain :disabled="list.length >= 20" @click="handlePush">push</el-button>
        <el-button type="danger" plain :disabled="list.length === 0" @click="handlePop">pop</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data() {
    return {
      title: 'About Nuxt',
      desc: '通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 UI渲染。'
    }
  },

  computed: {
    ...mapState({
      list: state => state.about.list
    })
  },

  methods: {
    ...mapMutations({
      addList: 'about/addList',
      decreaseList: 'about/decreaseList'
    }),

    handlePush() {
      let num = Math.floor(Math.random() * 101)
      this.addList(num)
    },

    handlePop() {
      this.decreaseList()
    }
  },

  asyncData(ctx) {
    console.log(ctx);
    return {};
  }
}
</script>

<style lang="scss" scoped>
</style>
