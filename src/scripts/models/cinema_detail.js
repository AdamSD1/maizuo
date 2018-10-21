//cinema_detail的模型层

//注意这里的ajax请求应该从url中动态获取

const M_data = ()=>{
    let tiaojian = location.search;
    tiaojian = tiaojian.slice(1);
    var timestamp = (new Date()).getTime();
    return $.ajax({
        url: '/v4/api/cinema/'+tiaojian+'?__t='+timestamp,
        success: (result) => {
          return result
        }
      })
}
export default {
    M_data
}