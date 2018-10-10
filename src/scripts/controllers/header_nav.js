//头部和侧边栏

//导入模块
import homeTpl from '../views/header_nav.html'

const render = ()=>{
    document.querySelector('#root').innerHTML = homeTpl;
}

//暴露模块

export default {
    render
}