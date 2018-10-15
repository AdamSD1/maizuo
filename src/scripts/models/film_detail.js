//film_detail的模型层

const M_data = ()=>{
    return $.ajax({
        url: 'v4/api/film/4032?__t=1539606689470',
        success: (result) => {
          return result
        }
      })
}
export default {
    M_data
}