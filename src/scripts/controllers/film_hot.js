//file_hot的控制层
//引入file_hot的控制层和视图层并在此合并 暴露接口
// 引入模块
import file_hot from "../views/film_hot.html"
import file_hot_list from "../views/film_hot_list.html"
import file_hot_model from "../models/film_hot"

//定义渲染数组
var datasource = [];
//定义页码
var pageNo = 2;

const render = async ()=>{
    $('main').html(file_hot)
    datasource = (await file_hot_model.M_data()).data.films; 
    await renderList(datasource)
    scroll()
    hot_future();
    skip_detail();
}


// 滚动函数
const scroll = () => {
    let posScroll = new BScroll('main', {
      probeType: 2
    })
      
    posScroll.on('scroll', function () {
      let y = this.y;
      let maxY = this.maxScrollY - y;
      let  foot = $('.foot img')
      if (maxY >= 0) {
        foot.addClass('down')
      }
    })
  
    posScroll.on('scrollEnd', async function () {
        let y = this.y;
        let maxY = this.maxScrollY - y;
        let  foot = $('.foot img')
        if (maxY >= -40 && maxY < 0) {
          this.scrollTo(0, this.maxScrollY + 40)
        } 
        else if (maxY >= 0) {  
         var cn = this.maxScrollY;
          foot.attr('src', '/images/ajax-loader.gif')
          let result = await file_hot_model.loadmore(++pageNo)       
           datasource = [
            ...datasource,
            ...result.data.films
          ]
          renderList(datasource)
          skip_detail();
          this.refresh();
          this.scrollTo(0,cn)
          foot.attr('src', '/images/arrow.png')
              .removeClass('down')
         
        }
      })
  }

//页面渲染函数
const renderList = async (list) => {
    let template = Handlebars.compile(file_hot_list);
    let html = template({list});
    $(".film_hot_list").html(html);
  }

  // 添加页面转化方法
  const hot_future = () => {
    $(".film_hot_title1").on('tap', function () {
      location.hash = "#film_hot"
    })
    $(".film_hot_title2").on('tap', function () {
      location.hash = "#film_future"
    })
  }
  //添加跳转到详情页的函数
  const skip_detail = ()=>{
      $(".film_hot_list>li").on("tap",function(){
        location.href ="?"+this.id+"#film_detail";
        localStorage.film_id = this.id
      })
  }


//暴露模块
export default {
    render
} 