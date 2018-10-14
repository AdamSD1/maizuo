// home_page的模型层
//第一个接口的数据
const M_data = ()=>{
    return $.ajax({
        url: '/v4/api/film/now-playing?__t=1539170060438&page=1&count=5',
        success: (result) => {
          return result
        }
      })
}
//第二个接口的数据
const M_data2 = ()=>{
    return $.ajax({
        url: '/v4/api/film/coming-soon?__t=1539170060442&page=1&count=3',
        success: (result) => {
          return result
        }
      })
}
//城市接口
const M_data_city = ()=>{
  return $.ajax({
      url: '/v4/api/city?__t=1539412941697',
      success: (result) => {
        return result
      }
    })
}
export default {
    M_data,
    M_data2,
    M_data_city
}