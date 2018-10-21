// seat的模型层

const M_data = ()=>{
    return $.ajax({
        
        url: '/v4/api/film/'+localStorage['film_id'],
        success: (result) => {
          return result
        }
      })
}
const M_data2 = (a)=>{
    return $.ajax({
        
        url: 'v4/api/schedule?__t='+a+'&film='+localStorage['film_id']+'&cinema='+localStorage['cinema_id'],
        success: (result) => {
          return result
        }
      })
}

const M_data3 = (a)=>{
    return $.ajax({
        
        url: '/v4/api/schedule?__t=1540120855997&film=0&cinema='+localStorage['cinema_id'],
        success: (result) => {
          return result
        }
      })
}

const M_data4 = (a)=>{
    return $.ajax({
        
        url: '/v4/api/seating-chart/823377770',
        success: (result) => {
          return result
        }
      })
}
export default {
    M_data,
    M_data2,
    M_data3,
    M_data4 
}
//https://m.maizuo.com/v4/api/film/4429
//https://m.maizuo.com/v4/api/schedule?__t=1540120855997&film=0&cinema=5140
//https://m.maizuo.com/v4/api/schedule?__t=1540120855997&film=0&cinema=4430
//https://m.maizuo.com/v4/api/seating-chart/823377761