//cinema_list的控制层
//引入cinema_list的控制层和视图层并在此合并 暴露接口
// 引入模块
import cinema_detail from "../views/cinema_detail.html"
import cinema_detail_model from "../models/cinema_detail"

const render = ()=>{
    document.querySelector('#root').innerHTML = cinema_detail
}

//暴露模块

export default {
    render
} 