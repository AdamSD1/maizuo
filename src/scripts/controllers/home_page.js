//home_page的控制层
//引入home_page的控制层和视图层并在此合并 暴露接口
// 引入模块
import home_page from '../views/home_page.html'
import home_page_modle from '../models/home_page'

const render = ()=>{
    //在此进行逻辑处理
    document.querySelector('#root').innerHTML = home_page;
    //数据已经获取到
    console.log(home_page_modle.M_data())
}

//暴露模块

export default {
    render
}
