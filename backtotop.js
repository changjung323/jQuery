$(document).ready(function(){

    // 上排按鈕一般的用法
    // $("#a1").click(function (e) { 
    //     var top = $("section1").position().top;
    //     $("html,body").animate({scrollTop: top}, 1000); 
    // });

    // API
    // 自訂函式 (參數) {內容}
    // bth - 要點選的按鈕選取器名稱
    // pos - 要前往的區塊選取器名稱
    // dur - 前往的時間
    function scrollToPosition (bth, pos, dur) {

        $(bth).click(function (e) { 
            var top =$(pos).position().top;
            $("html,body").animate({scrollTop: top}, dur);
            
        });
    }

    scrollToPosition ("#a1", "#section1", 1000);
    scrollToPosition ("#a2", "#section2", 1000);
    scrollToPosition ("#a3", "#section3", 1000);
    scrollToPosition ("#a4", "#section4", 1000);
    scrollToPosition ("#a5", "#section5", 1000);




    $("#btnTop").fadeOut(0)                   // 頁面載入好之後先讓按鈕消失

    $("#btnTop").click(function (e) { 
        
        // alert("點擊按鈕~");
        $("html,body").animate({scrollTop: 0}, 1000);    //尋找 網頁與身體 動畫效果 ({捲動上方: 0}, 1000), 時間
    });

    $(window).scroll(function () { 
        
        if ($(window).scrollTop() > 200) {      // 如果 頂端高度>200
            $("#btnTop").fadeIn(500)            // 讓按鈕出現
        } else {                                // 否則
            $("#btnTop").fadeOut(500)           // 讓按鈕消失
        }
    });
        
});