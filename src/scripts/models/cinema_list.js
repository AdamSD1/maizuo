//cinema_list的模型层

const M_data = ()=>{
    document.cookie = "cityId=15"
    return $.ajax({
        url: 'v4/api/cinema?__t=1539701587722',
        success: (result) => {
          return result
        }
      })
}
export default {
    M_data
}