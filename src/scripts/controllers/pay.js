//pay的控制层
//引入pay的控制层和视图层并在此合并 暴露接口
// 引入模块
import pay from '../views/pay.html'
import pay_modle from '../models/pay'

const render = ()=>{
    //在此进行逻辑处理
    document.querySelector('#root').innerHTML = pay;

}

//暴露模块

export default {
    render
}
