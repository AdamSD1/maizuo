//头部和侧边栏

//导入模块
import homeTpl from '../views/header_nav.html'
import homeCity from '../views/city.html'
import CityDate from './home_page'
import seatTpl from '../views/seat.html'
import city from './city'


const render = ()=>{
    document.querySelector('#root').innerHTML = homeTpl;
    changeSide();
    cityOnoff();
    mymessage();
}
//侧边栏显隐
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
            city.render();            
        })                  
    })
    
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
//点击我的
const mymessage = ()=>{
    $('.mymessage').on('tap',function(){
        location.hash = "#person";
    })
}
//暴露模块

export default {
    render,
    seat,
    cityAdd
}