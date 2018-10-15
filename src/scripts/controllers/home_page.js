//home_page的控制层
//引入home_page的控制层和视图层并在此合并 暴露接口
// 引入模块
import home_page from '../views/home_page_1.html'
import home_page_2 from '../views/home_page_2.html'
import home_page_modle from '../models/home_page'

const render = async()=>{
    //第一个接口的内容渲染
    let result = await home_page_modle.M_data() 
    var list =  result.data.films
    // console.log(result)
    var template = Handlebars.compile(home_page)
    let html = template({ list })
    $("main").html(html)
}

const render2 =async ()=>{
    //第二个接口的数据渲染
    let result2 = await home_page_modle.M_data2() 
    var list =  result2.data.films
    var template2 = Handlebars.compile(home_page_2)
    let html2 = template2({ list })
    $("#futruefilms").html(html2)
    scroll()
}

//content内容滚动
const scroll = ()=>{
    let posScroll = new BScroll('main')
}

//城市接口的数据渲染
const render_city = async()=>{
    let result_city = await home_page_modle.M_data_city()
    console.log(result_city.data.cities)
    for(var i=0;i<result_city.data.cities.length;i++){
        switch(result_city.data.cities[i].pinyin.charAt(0)){
            case 'A':
                $('<li>',{
                    text:result_city.data.cities[i].name,
                }).appendTo('main #city_A')
                break;
            case 'B':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('main #city_B')
            break;
            case 'D':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('main #city_D')
            break;
            case 'C':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('main #city_C')
            break;
            case 'E':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_E')
            break;
            case 'F':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_F')
            break;
            case 'G':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_G')
            break;
            case 'K':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_K')
            break;
            case 'L':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_L')
            break;
            case 'M':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_M')
            break;
            case 'N':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_N')
            break;
            case 'H':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_H')
            break;
            case 'J':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_J')
            break;
            case 'P':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_P')
            break;
            case 'Q':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_Q')
            break;
            case 'R':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_R')
            break;
            case 'S':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_S')
            break;
            case 'T':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_T')
            break;
            case 'W':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_W')
            break;
            case 'X':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_X')
            break;
            case 'Y':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_Y')
            break;
            case 'Z':
            $('<li>',{
                text:result_city.data.cities[i].name,
            }).appendTo('#city_Z')
            break;
        }
    }
    
}

//综合，一起暴露出去
const wrap =async()=>{
    await render()
    render2() 
}


//暴露模块


export default {
   wrap,
   render_city
}

