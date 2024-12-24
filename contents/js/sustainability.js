//sustainability.js-----------------
//horizontal slide
var total; // 페이지 총 갯수를 담을 변수
var stat = 0; //핸들러 실행 제어 (0-실행 전/허용, 1-실행 중/잠금)
var scLock = 0; //0-스크롤, 1-잠금

$(document).ready(function () {

    //hover했을 때 lnb 내려오게 하기
    $('.gnb>li').mouseenter(function () {
        $(this).find('.lnb').stop().slideDown(600);
    });

    $('.gnb>li').mouseleave(function () {
        $('.lnb').stop().slideUp(600);
    });

    total = $('.achieve').length;
    console.log('합계' + total);


    //클릭했을 때 animate 구현하기
    $('.year').click(function(){

        $(this).parent().find('.goal-des').animate({
            left:
        });

    });

});

