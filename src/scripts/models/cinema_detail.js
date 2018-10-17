//cinema_detail的模型层

//注意这里的ajax请求应该从url中动态获取

const M_data = ()=>{
    return $.ajax({
        url: '/v4/api/cinema/7230?__t=1539646890674',
        success: (result) => {
          return result
        }
      })
}
export default {
    M_data
}