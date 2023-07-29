<template>
    <div>
        {{ msg }}
        <div>
            <input type="test" v-model="info" />
            <button @click="handleClick">添加</button>
            <button @click="delClick">销毁</button>
        </div>
        <ul>
            <!-- <li v-for="item in list">{{item}}</li> -->
            <todo-item :key="item" v-for="item in list">
                <template v-slot:item="itemProps">
                    <span :style="{
                        fontSize: '20px',
                        color: itemProps.checked ? 'red' : 'blue',
                    }">
                        {{ item }}
                    </span>
                </template>
            </todo-item>
        </ul>
        <div v-if="showFlag">
            <!-- <p>message1:"{{ reverseMessage1 }}"</p> -->
            <p>message2:"{{ reverseMessage2() }}"</p>
            <!-- <p>{{ now }}</p> -->
            <button @click="() => $forceUpdate()">forceUpdate</button>
            <input v-model="message" />
        </div>
        <todoItem v-if="showItem" />
        <div>
            <h4>指令周期</h4>
            <button @click="show = !show">销毁</button>
            <button v-if="show" v-append-text="`hello ${number}`" @click="number++">
                按钮
            </button>
        </div>
    </div>
</template>

<script>
import todoItem from './components/todoItem.vue'
export default {
    directives: {
        appendText: {
            bind () {
                console.log('----directives：bind')
            },
            inserted (el, binding) {
                el.appendChild(document.createTextNode(binding.value))
                console.log('----directives：inserted', el, binding)
            },
            update () {
                console.log('----directives：update')
            },
            componentUpdated (el, binding) {
                el.removeChild(el.childNodes[el.childNodes.length - 1])
                el.appendChild(document.createTextNode(binding.value))
                console.log('----directives：componentUpdated', el, binding)
            },
            unbind () {
                console.log('----directives：unbind')
            },
        },
    },
    name: 'App',
    components: {
        todoItem,
    },
    data () {
        return {
            number: 0,
            show: true,
            showItem: true,
            showFlag: true,
            message: 'hello vue',
            msg: 'aaa',
            info: '',
            list: [],
        }
    },

    // computed:{
    //   reverseMessage1:function(){
    //     console.log("执行reverseMessage1")
    //     return this.message.split("").reverse().join("")
    //   },
    //   now:function(){
    //     return Date.now()
    //   }
    // },
    methods: {
        delClick () {
            this.showItem = false
        },
        reverseMessage2: function () {
            // console.log("执行reversedMessage2")
            return this.message.split('').reverse().join('')
        },
        handleClick () {
            this.list.push(this.info)
            this.info = ''
        },
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
