//seat的控制层
//引入seat的控制层和视图层并在此合并 暴露接口
// 引入模块
import seat from '../views/seat.html'
import seat_modle from '../models/seat'

const render = ()=>{
    //在此进行逻辑处理
    document.querySelector('#root').innerHTML = seat;
}

//暴露模块

export default {
    render
}
