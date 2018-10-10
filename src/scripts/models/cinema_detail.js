//cinema_detail的模型层

const M_data = ()=>{
    return $.ajax({
        url: '/v4/api/billboard/home?__t=1539170753861',
        success: (result) => {
          return result
        }
      })
}
export default {
    M_data
}