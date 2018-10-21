//seat的控制层
//引入seat的控制层和视图层并在此合并 暴露接口
// 引入模块
import seatTpl from '../views/seat.html'
import seat_modle from '../models/seat'

const render = ()=>{
    //在此进行逻辑处理
    $('main').html(seatTpl)
    seatDate()
    scroll()
}


//content内容滚动
const scroll = ()=>{
    let posScroll = new BScroll('#contentView',{
        probeType:2,
        scrollX:true,
        scrollY:false
    })

    posScroll.on("scrollEnd",function(){
        let y = this.y;
        let x = this.x;
    })
}

//渲染数据
const seatDate =async ()=>{
    let result = await seat_modle.M_data3()
    // let data1 = result.data.film.premiereAt;
    console.log(result.data.schedules)
    console.log(result.data.schedules[0].film.id)
    console.log(result.data.schedules[0].hall.name)
    for(var i=0;i<result.data.schedules.length;i++){
        if(localStorage['film_id']==result.data.schedules[i].film.id){
            localStorage["dnname"] = result.data.schedules[0].film.name;
            $('#details>div span').text(result.data.schedules[0].hall.name)
            $('#details>div p').text(localStorage["dncinema"])

            break;
        }
    }
    let result2 = await seat_modle.M_data4()
    console.log(result2.data.seatingChart.seats)
    var list =  result2.data.seatingChart.seats;
    for(var i=0;i<list.length;i++){
        var div = $("<div>").appendTo(".contentseats")
        div.css("top",(list[i].row*0.3+0.1).toFixed(2)+"rem")
        div.css("left",(list[i].column*0.2+0.1).toFixed(2)+"rem")
        div.attr("data-location",list[i].rowName+"-"+list[i].columnName)
        if(list[i].isOccupied){
            div.addClass('visited')
        }
    }

    //点击事件
    $('.contentseats').on('tap',function(){
        var e = e||event;
        var target = e.target||e.srcElement;
        if(target.tagName == "DIV"&&target.className!="visited"){
            $(target).toggleClass('clicked');
            $('#footerbar').show();
            if( $(target).attr('class')){
                var num1 = $(target).attr('data-location').split("-")[0]
                var num2 = $(target).attr('data-location').split("-")[1]
                $('<span>',{
                    text:num1+"排"+num2+"座",
                    class:$(target).attr('data-location')
                }).appendTo('#order')
            }else{
                $('#order>span').each(function(i){
                    if( $('#order>span').eq(i).attr("class")== $(target).attr('data-location')){
                        $(this).remove();
                    }
                })
            }
           
        }else{
            $('#footerbar').show();
        }
    })

    //点击确定，存localstorage
    $('#sure').on('tap',function(){
        var arr = [];
        $('#order>span').each(function(i){
            arr.push($('#order>span').eq(i).attr("class"))
        })
        localStorage.seats = arr;
        location.hash = "#order";
        $('.currentLocation').text("订单")
    })

}
//暴露模块

export default {
    render
}
