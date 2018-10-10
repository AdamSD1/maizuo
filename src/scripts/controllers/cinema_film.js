//cinema_film的控制层
//引入cinema_film的控制层和视图层并在此合并 暴露接口
// 引入模块
import cinema_film from "../views/cinema_film.html"
import cinema_film_model from "../models/cinema_film"

const render = ()=>{
    document.querySelector('#root').innerHTML = cinema_film
}

//暴露模块

export default {
    render
} 