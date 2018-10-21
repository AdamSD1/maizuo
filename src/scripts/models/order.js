// order的模型层

const M_data = ()=>{
    var id = localStorage.filmId;
    return $.ajax({
        url: '/v4/api/billboard/home?__t=1539170753861',
        success: (result) => {
          return result
        }
      })
}
//https://m.maizuo.com/v4/api/film/4410?__t=1539778261961
export default {
    M_data
}