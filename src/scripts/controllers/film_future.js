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
    await renderList(datasource)
    scroll()
    hot_future();
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
            console.log(this.maxScrollY)

            foot.attr('src', '/images/ajax-loader.gif')
            let result = await film_future_model.loadmore(++pageNo)
            datasource = [
                ...datasource,
                ...result.data.films
            ]
            renderList(datasource)
            this.refresh();
            this.scrollTo(0, cn)
            foot.attr('src', '/images/arrow.png')
                .removeClass('down')

        }
    })
}

//页面渲染函数
const renderList = async (list) => {
        let template = Handlebars.compile(film_future_list);
        let html = template({
            list
        });
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

//暴露模块

export default {
    render
}