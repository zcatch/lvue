<template>
  <div>
    <p :style="{ color: theme1.color }">f节点</p>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  inject: {
    theme1: {
      from: 'theme',
      default: () => ({}),
    },
  },
  components: {},
  created: function () {},
  methods: {},
}
</script>
