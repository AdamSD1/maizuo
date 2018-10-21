//cinema_film的控制层
//引入cinema_film的控制层和视图层并在此合并 暴露接口
// 引入模块

import cinema_film from "../views/cinema_film.html"
import cinema_film_list1 from "../views/cinema_detailA.html"
import cinema_film_list2 from "../views/cinema_detailB.html"
import cinema_film_model from "../models/cinema_film"

const render =async ()=>{
    let shuju = (await cinema_film_model.M_data()).data.filmList;
    let shuju_changci = (await cinema_film_model.M_data_changci()).data.schedules;
    shuju = shuju.slice(0,10)
    console.log(shuju)
    data_chuli(shuju_changci)
    console.log(shuju_changci);
    renderList(shuju,shuju_changci);
}

//页面渲染函数
const renderList = async (shuju,shuju_changci) => {
    let template = Handlebars.compile(cinema_film);
    $('main').html(template);

    let template1 = Handlebars.compile(cinema_film_list1);
    let html1 = template1({shuju});
    $('.cinema_film_show_box').html(html1);

    let template2 = Handlebars.compile(cinema_film_list2);
    let html2 = template2({shuju_changci});
    $('.cinema_film_changci').html(html2);
  }

  //数据处理函数
  function data_chuli(arr){
        arr.forEach(function(value,index){
            value.showAt = format(value.showAt);
            value.stopSellingAt = format(value.stopSellingAt);
        })
  }

  //处理时间戳
function format(shijianchuo)
{
//shijianchuo是整数，否则要parseInt转换
var time = new Date(shijianchuo);
var shi = time.getHours();
// var fen = time.getSeconds();
return time;
}



//暴露模块

export default {
    render
} 