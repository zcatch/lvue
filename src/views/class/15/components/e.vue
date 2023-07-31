<template>
  <div>
    <p :style="{ color: theme.color }">e节点</p>
    <button @click="handleClick">改变color为green</button>
  </div>
</template>
<script>
export default {
  inject: {
    theme: {
      default: () => ({}),
    },
  },
  data() {
    return {}
  },
  components: {},
  created: function () {},
  methods: {
    handleClick() {
      if (this.theme.changeColor) {
        this.theme.changeColor('green')
      }
    },
  },
}
</script>
