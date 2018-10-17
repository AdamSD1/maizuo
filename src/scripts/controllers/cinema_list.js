//cinema_list的控制层
//引入cinema_list的控制层和视图层并在此合并 暴露接口
// 引入模块
import cinema_list from "../views/cinema_list.html"
import cinema_list_li from "../views/cinema_list_li.html"
import cinema_list_model from "../models/cinema_list"

const render = async () => {
    let shuju = (await cinema_list_model.M_data());
    let data = shuju.data.cinemas;
    let result = data_group(data);
    let quyu = data_quyu(result)
    renderQuyu(quyu)
    tag_list(result);
}

//页面渲染函数
const renderQuyu = async (list) => {
    let template = Handlebars.compile(cinema_list);
    //参数是对象
    let html = template({
        list
    });
    $('main').html(html);
    $(".top_name").text("全部影院");
}

//数据分组函数
function data_group(arr) {
    let obj = {}
    arr.forEach(function (value, index) {
        let key = value.district.name;
        if (obj[key]) {
            obj[key].push(value)
        } else {
            obj[key] = [];
            obj[key].push(value);
        }
    })
    return obj;
}

//获取区域信息
function data_quyu(data) {
    let arr = [];
    for (var key in data) {
        arr.push(key);
    }
    return arr;
}
//处理点击产生影院
function tag_list(data) {
    $(".cinema_quyu").on("tap", function () {
        if ($(this).attr("data-status") == 'off') {
            let tag_data = data[$(this).text()]
            let template = Handlebars.compile(cinema_list_li)
            let html = template({
                tag_data
            });
            $(this).next().html(html);
        $(this).attr("data-status","open")
        }else{
            $(this).next().html("");
            $(this).attr("data-status","off")
        }
    })
}
//暴露模块
export default {
    render
}