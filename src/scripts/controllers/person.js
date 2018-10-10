//person的控制层
//引入person的控制层和视图层并在此合并 暴露接口
// 引入模块
import person from '../views/person.html'
import person_modle from '../models/person'

const render = ()=>{
    //在此进行逻辑处理
    document.querySelector('#root').innerHTML = person;
    //数据已经获取到
    console.log(person_modle.M_data())
}

//暴露模块

export default {
    render
}
