<template>
  <div>
    <p>g节点</p>
    <span>对象响应式1：{{ send.msg }}</span>
    <br />
    <span>对象响应式2：{{ objMsg }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  inject: ['send'],
  computed: {
    objMsg() {
      return this.send.msg
    },
  },
  components: {},
  created: function () {},
  methods: {},
}
</script>
