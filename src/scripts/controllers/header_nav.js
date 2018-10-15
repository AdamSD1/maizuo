//头部和侧边栏

//导入模块
import homeTpl from '../views/header_nav.html'
import homeCity from '../views/city.html'
import CityDate from './home_page'




const render = ()=>{
    document.querySelector('#root').innerHTML = homeTpl;
    changeSide();
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
        new Promise((resolve,reject)=>{
            $('main>div:nth-child(1)').html(homeCity);          
            resolve();
        }).then(()=>{
            CityDate.render_city();
            location.hash = "#city";
        })        
    }) 
}
//暴露模块

export default {
    render,
    cityOnoff
}