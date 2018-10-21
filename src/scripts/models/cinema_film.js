//cinema_film的模型层

const M_data = ()=>{
    return $.ajax({
        url: 'v4/api/cinema/5221/film?__t=1539785768096',
        success: (result) => {
          return result
        }
      })
}
const M_data_changci = ()=>{
    return $.ajax({
        url: 'v4/api/schedule?__t=1539785768098&film=0&cinema=5221',
        success: (result) => {
          return result
        }
      })
}
export default {
    M_data,
    M_data_changci
}