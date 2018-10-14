// file_hot的模型层

const M_data = ()=>{
    return $.ajax({
        url: '/v4/api/film/now-playing?page=1&count=7',
        dataType:"json",
        success: (result) => {
          return result
        }
      })
}
const refer = (pageNo)=>{
    return $.ajax({
        url: '/v4/api/film/now-playing?page='+pageNo+'&count=7',
        dataType:"json",
        success: (result) => {
          return result
        }
    })
}
export default {
    M_data,
    refer
}