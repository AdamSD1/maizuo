//file_hot的控制层
//引入file_hot的控制层和视图层并在此合并 暴露接口
// 引入模块
import file_hot from "../views/film_hot.html"
import file_hot_model from "../models/film_hot"

//定义渲染数组
var datasource = [];
const render = async ()=>{

    const datasource = (await file_hot_model.M_data()).data.films; 
    renderList(datasource)
    // const refer = datasource = (await file_hot_model.refer(2)).data.films; 
    // console.log(refer)
}

//页面渲染函数
const renderList = async (list) => {
    let template = Handlebars.compile(file_hot);
    let html = template({list});
    $("#root").html(html)
  }
//暴露模块
export default {
    render
} 