<template>
  <div class="parent-first">
    <p style="font-size: 18px">A节点</p>
    <button @click="changeColor()">更改color为红色</button>
    <br />
    <input v-model="name" name="name" placeholder="请输入祖宗名称" />
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
  components: { bpage, cpage, dpage },
  provide() {
    return {
      //   theme: {
      //     color: this.color,//单纯的字符串，不具备响应式，并不能时时响应到provide
      //   },
      //   第一种响应方式：通过传递响应式数据
      theme: this,
      //   第二种响应方式：传递响应式方法
      name: () => {
        return this.name
      },
      //   第三种响应方式：传递对象
      send: this.send,
    }
  },
  data() {
    return {
      send: {
        msg: 'xxxx',
      },
      color: 'blue',
      name: '',
    }
  },
  methods: {
    changeColor(color) {
      if (color) {
        this.color = color
      } else {
        this.color = this.color === 'blue' ? 'red' : 'blue'
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.parent-first {
  border: 1px solid #333;
  height: 100%;
  text-align: center;
}
</style>
