$(document).ready(function(){

    $("#btnTop").fadeOut(500)

    $("#btnTop").click(function (e) { 
        
        // alert("嗨");
        $("html,body").animate({scrollTop: 0}, 1000);    
    });

    $(window).scroll(function () { 
        
        if ($(window).scrollTop() > 200) {      // 如果滾輪下拉讓頂端至高度200以下
            $("#btnTop").fadeIn(500)            // 讓按鈕出現
        } else {                                // 否則
            $("#btnTop").fadeOut(500)           // 消失
        }
    });
        
    
});