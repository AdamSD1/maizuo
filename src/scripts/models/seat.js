// seat的模型层

const M_data = ()=>{
    return $.ajax({
        
        url: '/v4/api/seating-chart/823376645?__t=1539736999705&partyId=&fundingId=',
        success: (result) => {
          return result.data
        }
      })
}
export default {
    M_data
}
//https://m.maizuo.com/v4/api/seating-chart/823376645?__t=1539736999705&partyId=&fundingId=