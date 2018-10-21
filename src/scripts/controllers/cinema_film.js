//cinema_film的控制层
//引入cinema_film的控制层和视图层并在此合并 暴露接口
// 引入模块
import cinema_film from "../views/cinema_film.html"
import cinema_film_list1 from "../views/cinema_filmA.html"
import cinema_film_listLi from "../views/cinema_filmLi.html"
import cinema_film_filmRiqi from "../views/cinema_filmRiqi.html"
import cinema_film_model from "../models/cinema_film"

//电影名
var out_filename = "";

const render = async () => {
    // console.log((await cinema_film_model.M_data()))
    let shuju = (await cinema_film_model.M_data()).data.filmList;
    let shuju_changci = (await cinema_film_model.M_data_changci()).data.schedules;
    //渲染顶部名称
    let cinema = (await cinema_film_model.cinema_name()).data.cinema.name;
    
    shuju = shuju.slice(0, 10)
    // console.log(shuju)
    data_chuli(shuju_changci)
    let result = data_group(shuju_changci)
    //在这里引入分组函数
    //界面外层盒子渲染
    renderList(shuju)
    $(".top_name").html(cinema);
    //首次进入页面的渲染
    first_enter(result)
    //选择电影的事件
    file_select(result);
    // 给ul下的日期加上点击事件
    date_Ul_tap(result);
}

//首次进入页面的渲染
function first_enter(result) {
    $(".cinema_film_show_box>div>img").eq(0).addClass("no-opacity");
    //获取第一个的名称
    let name = $(".cinema_film_show_box>div>img").eq(0).next().html();
    //获取当前日期
    let date = new Date();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    //拼接当前日期的字符串
    let dateString = add0(month) + "." + add0(strDate);
    let can =  dateString+name;
    var ul_arr = [];
    for (var i in result) {
        var result_date = i.slice(0, 5);
        i = i.slice(5)
        if (i == name) {
            ul_arr.push(result_date);
        }
    }
    //给全局电影名赋值
    out_filename = name;
    //日期高亮
    
    renderUl(ul_arr)
    renderLi(result, dateString + name)
    $(".cinema_film_time>div li").eq(0).addClass("li_bottom").siblings().removeClass("li_bottom")
}


//页面渲染函数
const renderList = (shuju) => {
    //渲染盒子
    let template = Handlebars.compile(cinema_film);
    $('main').html(template);

    //渲染列表一
    let template1 = Handlebars.compile(cinema_film_list1);
    let html1 = template1({
        shuju
    });
    $('.cinema_film_show_box').html(html1);

}

//数据处理函数(转换电影的开始时间，并转换电影的结束时间)
function data_chuli(arr) {
    arr.forEach(function (value, index) {
        let result = format(value.showAt, value.film.mins);
        value.showAt = result.start;
        value.stopSellingAt = result.end;
        value.riqi = result.riqi;
    })
}

//处理时间小于10
function add0(m) {
    return m < 10 ? '0' + m : m
}
//处理时间戳
function format(shijianchuo, shichang) {
    //shijianchuo是整数，否则要parseInt转换
    var time = new Date(shijianchuo);
    var shi = time.getHours();
    var fen = time.getMinutes();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    //获取结束时间的时间戳
    var endTime = shijianchuo + shichang * 60 * 1000;
    endTime = new Date(endTime);
    var end_shi = endTime.getHours();
    var end_fen = endTime.getMinutes();
    return {
        start: add0(shi) + ":" + add0(fen),
        end: add0(end_shi) + ":" + add0(end_fen),
        riqi: add0(month) + "." + add0(day)
    }
}

//数组分组函数
function data_group(arr) {
    let obj = {}
    arr.forEach(function (value, index) {
        let key = value.riqi + value.film.name;
        if (obj[key]) {
            obj[key].push(value)
        } else {
            obj[key] = [];
            obj[key].push(value);
        }
    })
    return obj;
}


//电影选择和场次显示
function file_select(result) {
    var filename = "";
    $(".cinema_film_show_box").on("tap", function (e) {
        var e = e;
        var target = e.target || e.srcElement;
        if (target.tagName == "IMG") {
            //将当前高亮
            $(".cinema_film_show_box img").removeClass("no-opacity")
            $(target).addClass("no-opacity")
            filename = $(target).next().html();
            out_filename = filename;
            //获取当前日期
            let date = new Date();
            let month = date.getMonth() + 1;
            let strDate = date.getDate();
            //拼接当前日期的字符串
            let dateString = add0(month) + "." + add0(strDate)
            //判断该类型的数组有几个
            var ul_arr = [];
            for (var i in result) {
                var result_date = i.slice(0, 5);
                i = i.slice(5)
                if (i == filename) {
                    ul_arr.push(result_date);
                }
            }
            renderUl(ul_arr)
            renderLi(result, dateString + filename)
            $(".cinema_film_time>div li").eq(0).addClass("li_bottom").siblings().removeClass("li_bottom")
            //在此调用渲染函数
        }
    })
}

//给日期加上点击事件
function date_Ul_tap(result) {
    $(".cinema_film_time").on("tap", function (e) {
        var e = e || event;
        var target = e.target || e.srcElement;
        if (target.tagName == "LI") {
            renderLi(result, $(target).html().slice(0, 5) + out_filename)
            //改变下边框
            $(target).addClass("li_bottom").siblings().removeClass("li_bottom")
        }
    })
}

// ul的渲染模块
const renderUl = (dateArr) => {
    let template = Handlebars.compile(cinema_film_filmRiqi);
    let html = template({
        dateArr
    });
    $('.cinema_film_time>div').html(html);
}


// ul里面li的渲染模块 传入当前所有数组，并判断是哪个数组
const renderLi = (result, dateArr) => {

    //处理今天已无场次的问题
    if (!result[dateArr]) {
        var curDate = new Date();
        var nextDate = new Date(curDate.getTime() + 24 * 60 * 60 * 1000);
        var next = nextDate.getMonth() + 1;
        var nextday = nextDate.getDate();
        dateArr = next + "." + nextday + dateArr.slice(5);
    }
    let can = result[dateArr];
    let template = Handlebars.compile(cinema_film_listLi);
    let html = template({
        can
    });
    $('.cinema_film_changci').html(html);
}

//暴露模块
export default {
    render
}