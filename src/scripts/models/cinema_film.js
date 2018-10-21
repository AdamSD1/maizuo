//cinema_film的模型层

const M_data = ()=>{
    let id = location.search;
    id = id.slice(1);
    var timestamp = (new Date()).getTime();
    return $.ajax({
        url: 'v4/api/cinema/'+id+'/film?__t='+timestamp,
        success: (result) => {
          return result
        }
      })
}
const M_data_changci = ()=>{
  let id1 = location.search;
  id1 = id1.slice(1);
  var timestamp1 = (new Date()).getTime();
    return $.ajax({
        url: 'v4/api/schedule?'+timestamp1+'&film=0&cinema='+id1,
        success: (result) => {
          return result
        }
      })
}
const cinema_name = ()=>{
  let id1 = location.search;
  id1 = id1.slice(1);
  var timestamp1 = (new Date()).getTime();
    return $.ajax({
        url: 'v4/api/cinema/'+id1+'?__t='+timestamp1,
        success: (result) => {
          return result
        }
      })
}
export default {
    M_data,
    M_data_changci,
    cinema_name
}