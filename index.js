//index.js
$(window).scroll(function () {

    //마우스휠 발생 시, gnb 색깔 바꾸기 

    var scTop = $(this).scrollTop();
    var headerTop = $('header').outerHeight();

    if (scTop > headerTop) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }

});

$(document).ready(function () {

    //hover했을 때 lnb 내려오게 하기
    $('.gnb>li').mouseenter(function () {
        $(this).find('.lnb').stop().slideDown(600);
    });

    $('.gnb>li').mouseleave(function () {
        $('.lnb').stop().slideUp(600);
    });

    //best-item 슬라이드!
    var autocall = setInterval(flowTop, 20);

    $('.best-item a').hover(function(){
        //mouseenter
        clearInterval(autocall);
        $(this).css('transform', 'scale(1.4)').find('p').show();

    }, function(){
        //mouseleave
        autocall = setInterval(flowTop, 40);
        $(this).css('transform', 'none').find('p').hide();

    });


});

//best-item 슬라이드!
var moveTop = 0; //이동하는 top값을 담을 변수

function flowTop() {
    moveTop++; //top 이동값을 1씩 증가!
    var boxH = $('.best-item a').first().outerHeight();
    /* console.log('boxH의 높이값 :' + boxH); */

    //if else문
    //이동한 픽셀수(moveTop)가 a 하나의 높이보다 커졌을 때 -> 다음을 위한 준비!
    if (moveTop > boxH) {
        $('.best-item').append($('.best-item a').first()).css({
            top: 0
        });

        moveTop = 0;

    } else {
        //moveTop의 값을 top 값으로 적용!
        $('.best-item').css({
            top: -moveTop
        });
    }
}
