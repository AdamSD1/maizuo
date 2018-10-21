//film_future的控制层
//引入film_future的控制层和视图层并在此合并 暴露接口
// 引入模块
import film_future from "../views/film_future.html"
import film_future_list from "../views/film_future_list.html"
import film_future_model from "../models/film_future"

//定义渲染数组
var datasource = [];
//定义页码
var pageNo = 2;

const render = async () => {
    $('main').html(film_future)
    datasource = (await film_future_model.M_data()).data.films;
    datasource.forEach(function(item,index,array){
         item.premiereAt = format(item.premiereAt)
    })
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
        let foot = $('.foot img')
        if (maxY >= 0) {
            foot.addClass('down')
        }
    })

    posScroll.on('scrollEnd', async function () {
        let y = this.y;
        let maxY = this.maxScrollY - y;
        let foot = $('.foot img')
        if (maxY >= -40 && maxY < 0) {
            this.scrollTo(0, this.maxScrollY + 40)
        } else if (maxY >= 0) {
            var cn = this.maxScrollY;

            foot.attr('src', '/images/ajax-loader.gif')
            let result = await film_future_model.loadmore(++pageNo)
            let jieguo = result.data.films
            jieguo.forEach(function(item,index,array){
                item.premiereAt = format(item.premiereAt)
           })
            datasource = [
                ...datasource,
                ...jieguo
            ]
            renderList(datasource)
            this.refresh();
            skip_detail();
            this.scrollTo(0, cn)
            foot.attr('src', '/images/arrow.png')
                .removeClass('down')

        }
    })
}

//页面渲染函数
const renderList = async (list) => {
        let template = Handlebars.compile(film_future_list);
        let html = template({list});
        $(".film_future_list").html(html);
}
// 添加页面转化方法
const hot_future = () => {
    $(".film_future_title1").on('tap', function () {
        location.hash = "#film_hot"
    })
    $(".film_future_title2").on('tap', function () {
        location.hash = "#film_future"
    })
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
var xingqi = '';
switch(zhou){
    case 1:xingqi = '星期一';break;
    case 2:xingqi = '星期二';break;
    case 3:xingqi = '星期三';break;
    case 4:xingqi = '星期四';break;
    case 5:xingqi = '星期五';break;
    case 6:xingqi = '星期六';break;
    case 7:xingqi = '星期日';break;
}
return add0(m)+'月'+add0(d)+'日上映'+'      '+xingqi;
}

  //添加跳转到详情页的函数
  const skip_detail = ()=>{
    $(".film_future_list>li").on("tap",function(){
      location.href ="?"+this.id+"#film_detail";
      localStorage.film_id = this.id
    })
}


//暴露模块

export default {
    render
}