<template>
  <div>
    <p>h节点</p>
    <span>祖宗的名称(方法响应式)：{{ name() }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  inject: {
    name: {
      default: () => '',
    },
  },
  components: {},
  created: function () {},
  methods: {},
}
</script>
