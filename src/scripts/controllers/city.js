//city的控制层
//引入city的控制层和视图层并在此合并 暴露接口
// 引入模块
import city from "../views/city.html"
import city_model from "../models/city"

const render = ()=>{
    document.querySelector('#root').innerHTML = city
}

//暴露模块

export default {
    render
} 