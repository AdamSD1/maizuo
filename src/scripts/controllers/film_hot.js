//file_hot的控制层
//引入file_hot的控制层和视图层并在此合并 暴露接口
// 引入模块
import file_hot from "../views/film_hot.html"
import file_hot_model from "../models/film_hot"

const render = ()=>{
    document.querySelector('#root').innerHTML = file_hot
}

//暴露模块

export default {
    render
} 