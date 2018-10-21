//cinema_list的控制层
//引入cinema_list的控制层和视图层并在此合并 暴露接口
// 引入模块
import cinema_detail from "../views/cinema_detail.html"
import cinema_detail_model from "../models/cinema_detail"

const render = async ()=>{
    let shuju = (await cinema_detail_model.M_data());
    let result = shuju.data.cinema;
    cinema_detail_chuli(result);
    console.log(result);
    renderList(result);
    cinema_detail_change();
}

//页面渲染函数
const renderList = async (list) => {
    let template = Handlebars.compile(cinema_detail);
    //参数是对象
    let html = template(list);
    $('main').html(html);
    // $(".top_name").text(list.name)
  }


  //对数据进行处理
  function cinema_detail_chuli(result){
      localStorage["dncinema"] = result.name
        // result.a = result.services[1].description;
        result.b = result.services[0].description;
  }

  //事件处理
  function cinema_detail_change(){
      $(".cinema_detail_icon>ul>li").on("tap",function(){
          $(this).addClass("cinema_detail_li_change").siblings().removeClass("cinema_detail_li_change");
          $(".cinema_detail_icon>p").eq($(this).index()).removeClass("cinema_detail_p_hidden").siblings("p").addClass("cinema_detail_p_hidden")
      })
      //跳转路由
      $('.cinema_detail_liji').on('tap',function(){
          location.hash = "#seat";
      })
  }

//暴露模块

export default {
    render
} 