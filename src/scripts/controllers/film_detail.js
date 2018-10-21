//film_detail的控制层
//引入film_detail的控制层和视图层并在此合并 暴露接口
// 引入模块
import film_detail from "../views/film_detail.html"
import film_detail_model from "../models/film_detail"

const render =async ()=>{
    let shuju = (await film_detail_model.M_data());
    let result = shuju.data.film;
    data_handling(result);
    // console.log(result)
    renderList(result);
}

//页面渲染函数
const renderList = async (list) => {
    let template = Handlebars.compile(film_detail);
    //参数是对象
    let html = template(list);
    $('main').html(html);
    $(".top_name").text(list.name)
  }

//数据处理函数
const data_handling = (result)=>{
    let string = "";
    result.actors.forEach(function(item,index,array){
        string = string + item.name + "|"
    })
    result.actors = string;
    result.premiereAt =  format(result.premiereAt);
}

//处理时间戳
function add0(m){return m<10?'0'+m:m }
function format(shijianchuo)
{
//shijianchuo是整数，否则要parseInt转换
var time = new Date(shijianchuo);
var m = time.getMonth()+1;
var d = time.getDate();
var zhou = time.getDay();
return add0(m)+'月'+add0(d)+'日上映';
}

//暴露模块

export default {
    render
} 