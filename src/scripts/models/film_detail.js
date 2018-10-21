//film_detail的模型层

const M_data = ()=>{
    let tiaojian = location.search;
    tiaojian = tiaojian.slice(1);
    var timestamp = (new Date()).getTime();
    return $.ajax({
        url: "v4/api/film/"+tiaojian+"?__t="+timestamp,
        success: (result) => {
          return result
        }
      })
}
export default {
    M_data
}
