<template>
  <div class="parent-first">
    <bpage></bpage>
    <cpage></cpage>
    <dpage></dpage>
  </div>
</template>
<script>
import bpage from './components/b.vue'
import cpage from './components/c.vue'
import dpage from './components/d.vue'
export default {
  components: { bpage,cpage,dpage },
  data() {
      return {}
  },
  created: function () {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.parent-first 
{
  border:1px solid #333;
  height: 100%
  
  ;
}
</style>