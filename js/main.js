
// レスポンシブ対応


if (window.matchMedia('(max-width: 1150px)').matches) {
    //スマホ、タブレット処理
    // メニューをクリックした時、
    // header-navを表示非表示切り替え
$("#hamburger").click(function(){
    $(".header").toggleClass("is-active");
    $(".header-ttl").toggleClass("is-active");
    $("#header-nav").fadeToggle();
});
    $(".header-item").click(function(){
        $(".header").toggleClass("is-active");
        $(".header-ttl").toggleClass("is-active");
        $("#header-nav").fadeToggle();
    });

} else if (window.matchMedia('(min-width:768px)').matches) {
    //PC処理
    // mv画像動作
    $(window).on('scroll', function(){

        var scrollTop = $(window).scrollTop();
        var bgPosition = scrollTop / 3; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）
    
    if(bgPosition){
        $(".mv").css('background-position', 'center left -'+ bgPosition + 'px');
        }
    });
    
}