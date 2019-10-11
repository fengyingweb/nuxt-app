<template>
  <div class="sub-container">
    <p class="desc">用户ID: {{userId}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: ''
    }
  },

  // 第一个参数被设定为当前页面的上下文对象 asyncData方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象
  // 使用方式有两种返回Promise, 或者使用async/await
  async asyncData({ params }) {
    return { userId: params.id }
  }
}
</script>
