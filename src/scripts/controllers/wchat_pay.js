//wchat_pay的控制层
//引入wchat_pay的控制层和视图层并在此合并 暴露接口
// 引入模块
import wchat_pay from '../views/wchat_pay.html'
import wchat_pay_modle from '../models/wchat_pay'

const render = ()=>{
    //在此进行逻辑处理
    document.querySelector('#root').innerHTML = wchat_pay;
}

//暴露模块

export default {
    render
}
