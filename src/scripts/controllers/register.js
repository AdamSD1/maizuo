//register的控制层
//引入register的控制层和视图层并在此合并 暴露接口
// 引入模块
import register from '../views/register.html'
import register_modle from '../models/register'

const render = ()=>{
    //在此进行逻辑处理
    document.querySelector('#root').innerHTML = register;
    //数据已经获取到
    console.log(register_modle.M_data())
}

//暴露模块

export default {
    render
}
