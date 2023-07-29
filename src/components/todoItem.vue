<template>
    <li id="box" class="item">
        <input type="checkbox" v-model="checked" />
        <slot name="item" v-bind="{ checked }"></slot>
    </li>
</template>

<script>
export default {
    props: [],
    data() {
        return {
            msg: 'msg',
            checked: false,
        }
    },
    beforeCreate() {
        console.log('-----beforeCreate')
    },
    created() {
        console.log('-----created')
    },
    beforeMount() {
        console.log('-----beforeMount')
    },
    mounted() {
        console.log('-----mounted')
    },
    beforeUpdate() {
        console.log('-----beforeUpdate')
    },
    updated() {
        console.log('-----updated')
    },
    beforeDestroy() {
        console.log('-----beforeDestroy')
    },
    destroyed() {
        console.log('-----destroyede')
    },
}
</script>

<style scoped>
.item {
    color: red;
}
</style>
