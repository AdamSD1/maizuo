//cinema_list的控制层
//引入cinema_list的控制层和视图层并在此合并 暴露接口
// 引入模块
import cinema_list from "../views/cinema_list.html"
import cinema_list_model from "../models/cinema_list"

const render = ()=>{
    document.querySelector('#root').innerHTML = cinema_list
}

//暴露模块

export default {
    render
} 