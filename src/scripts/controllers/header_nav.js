//头部和侧边栏

//导入模块
import homeTpl from '../views/header_nav.html'
import homeCity from '../views/city.html'
import CityDate from './home_page'
// import seatTpl from '../views/seat.html'
import city from './city'


const render = ()=>{
    document.querySelector('#root').innerHTML = homeTpl;

    document.cookie = "cityName=北京";
    document.cookie = "cityId=12";
    changeSide();
    cityOnoff();

}
//侧边栏显隐,侧边栏的所有点击事件
const changeSide = ()=>{
    var onoff = false;
    $("#MenuOnoff").on('tap',function(){
        if(onoff){
            $('#sideMenu').animate({
                left:"-2.5rem"
            },400);
            onoff = false;
        }else{
            $('#sideMenu').animate({
                left:"0rem"
            },400);
            onoff = true;
        }
        
    })
    //点击我的
    $('.mymessage').on('tap',function(){
        location.hash = "#person";
        $('#sideMenu').animate({
            left:"-2.5rem"
        },400);
        onoff = false;
    })
    //点击首页
    $('.home_page').on('tap',function(){
        location.hash = "#home_page";
        $('#sideMenu').animate({
            left:"-2.5rem"
        },400);
        onoff = false;
    })
    //点击电影
    $('.film_hot').on('tap',function(){
        location.hash = "#film_hot";
        localStorage.type = "film";
        $('#sideMenu').animate({
            left:"-2.5rem"
        },400);
        onoff = false;
    })

    //点击影院
    $('.cinema_list').on('tap',function(){
        location.hash = "#cinema_list";
        localStorage.type = "cinema";
        $('#sideMenu').animate({
            left:"-2.5rem"
        },400);
        onoff = false;
    })
}
//城市点击显隐
const cityOnoff = ()=>{
    $('#city').on('tap',function(){
        location.hash = "#city";      
    }) 
}
//城市数据加载
const cityAdd = ()=>{
    new Promise((resolve,reject)=>{
        $('main').html(homeCity);   
        resolve();
    }).then(()=>{
        return  new Promise((resolve,reject)=>{
            CityDate.render_city();
            scroll()
            resolve();
        }).then(()=>{
           CityDate.render_city();
            location.hash = "#city";
        })        
    }) 
            city.render();            
        }                  

//滚动
//content内容滚动
const scroll = ()=>{
    let posScroll = new BScroll('main')
}
//定座测试
const seat = ()=>{
    $('.manicon').on('tap',function(){
        location.hash = "#seat";
    })
}


//暴露模块

export default {
    render,
    seat,
    cityAdd
}