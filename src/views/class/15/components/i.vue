<!-- 函数式组件 -->
<template functional>
  <div>
    <p :style="{ color: injections.theme.color }">i节点</p>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  inject: {
    theme: {
      default: () => ({}),
    },
  },
  components: {},
  created: function () {},
  methods: {},
}
</script>
