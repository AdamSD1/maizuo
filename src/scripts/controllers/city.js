const render = ()=>{
    $('#wrap>ul').on('tap',function(e){
        var e= e||event;
        var target = e.target||e.srcElement;
        if(target.tagName == "LI"){
           $("#city").text($(target).text())
           localStorage.cityName = $(target).text()
           localStorage.cityId = $(target).attr('data-id')
            location.hash = "#home_page";
        }      
    })

}

export default {
    render
}