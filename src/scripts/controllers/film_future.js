//film_future的控制层
//引入film_future的控制层和视图层并在此合并 暴露接口
// 引入模块
import film_future from "../views/film_future.html"
import film_future_model from "../models/film_future"

const render = ()=>{
    document.querySelector('#root').innerHTML = film_future
}

//暴露模块

export default {
    render
} 