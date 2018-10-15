// film_future的模型层
const M_data = ()=>{
    return $.ajax({
        url: 'v4/api/film/coming-soon?page=1&count=7',
        dataType:"json",
        success: (result) => {
          return result
        }
      })
}
const loadmore = (pageNo)=>{
    return $.ajax({
        url: '/v4/api/film/coming-soon?page='+pageNo+'&count=7',
        dataType:"json",
        success: (result) => {
          return result
        }
    })
}
export default {
    M_data,
    loadmore
}