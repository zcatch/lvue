<template>
  <div class="second-page">
    <p style="font-size: 16px">C节点</p>
    <epage></epage>
    <fpage></fpage>
  </div>
</template>
<script>
import epage from './e.vue'
import fpage from './f.vue'
export default {
  data() {
    return {}
  },
  components: { epage, fpage },
  created: function () {},
  methods: {},
  //   provide() {
  //     return {
  //       theme: {
  //         color: 'green',
  //       },
  //     }
  //   },
}
</script>
<style lang="scss" scoped>
.second-page {
  border: 1px solid blue;
}
</style>
