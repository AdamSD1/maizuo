//login的控制层
//引入login的控制层和视图层并在此合并 暴露接口
// 引入模块
import login from '../views/login.html'
import login_modle from '../models/login'

const render = ()=>{
    //在此进行逻辑处理
    document.querySelector('#root').innerHTML = login;
    //数据已经获取到
    console.log(login_modle.M_data())
}

//暴露模块

export default {
    render
}
