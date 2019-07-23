<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        {{title}}
      </h1>
      <h2 class="subtitle">
        My supreme Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
        <nuxt-link to="/users">Go To Uses</nuxt-link>
      </div>
      <div class="state-wrapper">
        <h3 class="title3">{{count}}</h3>
        <div class="btn-box">
          <el-button type="primary" plain icon="el-icon-plus" @click="add"></el-button>
          <el-button type="primary" plain icon="el-icon-minus" @click="decrease"></el-button>
          <el-button type="primary" plain @click="SET_COUNT(50)">设置count</el-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '@/components/Logo.vue'
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  components: {
    Logo
  },
  data() {
    return {
      title: 'nuxt-demo'
    }
  },
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  methods: {
    ...mapMutations({
      add: 'add',
      decrease: 'decrease'
    }),

    ...mapActions({
      SET_COUNT: 'SET_COUNT'
    })
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$nuxt)
      this.$nuxt.$loading.start()

      setTimeout(() => {
        this.$nuxt.$loading.finish()
      }, 800)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
