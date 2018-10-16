//order的控制层
//引入order的控制层和视图层并在此合并 暴露接口
// 引入模块
import order from '../views/order.html'
import order_modle from '../models/order'

const render = ()=>{
    //在此进行逻辑处理
    $('main').html(order);
    $('#order_sure').on('tap',function(){
        $('.currentLocation').text("支付")
        location.hash = "#pay";
    })

}

//暴露模块

export default {
    render
}
