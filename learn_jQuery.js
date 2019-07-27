// $(document)    - 選取器：尋找整份網頁物件
// ready();       - 方法：準備完成 - 當指定物件準備完成會執行 () 內容
// function() {}  - 匿名方法：可以在 {} 內執行任何事情


// $("選取器") - 與 CSS 選取器語法相同但必須加 ""


$(document).ready(function(){
    alert("安安~");                               // alert(); - 方法：跳出訊息 () 內可以輸入任何文字，必須用 ""
    $("h1").hide();                              // hide()    - 隱藏物件
    $("#box1").addClass("gold");                 // addClass("類別名稱") - 增加類別
    
    
    $("#box2").fadeOut(3000).fadeIn(2500);       // fadeOut() - 淡出 可指定毫秒
                                                // fadeIn()  - 淡入 可指定毫秒
    
    $("#box").mouseenter(function() {
        $(this).animate({width: "200px"});    
    }                                  
})

