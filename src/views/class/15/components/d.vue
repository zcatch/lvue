<template>
    <div class="second-page">
        <p style="font-size: 16px;">D节点</p>
        <gpage></gpage>
        <hpage></hpage>
        <ipage></ipage>
    </div>
</template>
<script>
import gpage from './g.vue'
import hpage from './h.vue'
import ipage from './i.vue'
export default {
    data() {
        return {}
    },
    components: {gpage,hpage,ipage},
    created: function () {},
    methods: {},
}
</script>
<style lang="scss" scoped>
.second-page{
    border:1px solid pink;
}
</style>