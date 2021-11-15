// ハンバーガーメニュー

// メニューをクリックした時、
// header-navを表示非表示切り替え

$("#hamburger").click(function(){
    $(".header").toggleClass("is-active");
    $(".header-ttl").toggleClass("is-active");
    $("#header-nav").fadeToggle();
});