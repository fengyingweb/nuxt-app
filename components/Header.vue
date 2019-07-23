<template>
  <header class="header" :style="headerStyle">
    <div class="header-con">
      <a class="logo" href="/">
        <!-- <img class="logo-img" :src="logo" alt="图片不存在" /> -->
      </a>
      <div class="header-nav">
        <el-menu 
          mode="horizontal"
          :default-active="activeIndex"
          :background-color="backgroundColor"
          :text-color="textColor"
          :active-text-color="activeTextColor"
          @select="handleSelect">
          <el-menu-item 
            v-for="(item, ind) in navList" 
            :key="ind" 
            :index="item.title"
            @click.native="handleClick(item)">
            {{item.title}}
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      default: () => []
    },
    isFixed: {
      type: Boolean,
      default: true
    },

    backgroundColor: {
      type: String,
      default: '#545c64'
    },

    textColor: {
      type: String,
      default: '#fff'
    },

    activeTextColor: {
      type: String,
      default: '#267aff'
    },

    active: {
      type: [String, Number],
      default: ''
    }
  },

  data() {
    return {
      logo: require('../assets/images/logo.png')
    }
  },

  computed: {
    headerStyle() {
      let {isFixed, backgroundColor, textColor} = this
      let style = {
        position: isFixed ? 'fixed' : 'absolute',
        top: 0,
        left: 0,
        backgroundColor,
        color: textColor
      }
      return style
    },

    activeIndex() {
      return this.active
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },

    handleClick(item) {
      this.$router.push({path: item.path})
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 60px;
    z-index: 9999;
  }

  .header-con {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 1280px;
    height: 100%;
  }
  .logo {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 255, .8);
    background-image: url(../assets/images/logo.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 36px 36px;
    border-radius: 50px;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    overflow: hidden;
  }

  .logo-img {
    width: 36px;
    height: 36px;
  }
</style>
