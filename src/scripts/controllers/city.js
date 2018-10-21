const render = ()=>{
    $('#wrap>ul').on('tap',function(e){
        var e= e||event;
        var target = e.target||e.srcElement;
        if(target.tagName == "LI"){
           $("#city").text($(target).text())
           document.cookie = "cityName"+"="+$(target).text();
           document.cookie = "cityId"+"="+$(target).attr('data-id');
            location.hash = "#home_page";
        }      
    })

}

export default {
    render
}