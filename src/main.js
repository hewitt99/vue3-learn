// 引入了createApp的工厂函数
import { createApp } from 'vue'
// 引入所有组件的父亲
import App from './App.vue'
import './index.css'

// 创建实例对象
// const app = createApp(App)

// app.mount()挂载
createApp(App).mount('#app')


// 卸载
// setTimeout(() => {
//   app.unmount('#app')
// }, 2000)
