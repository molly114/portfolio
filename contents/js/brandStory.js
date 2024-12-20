//brand-story.js

$(document).ready(function () {

    //hover했을 때 lnb 내려오게 하기
    $('.gnb>li').mouseenter(function () {
        $(this).find('.lnb').stop().slideDown(600);
    });

    $('.gnb>li').mouseleave(function () {
        $('.lnb').stop().slideUp(600);
    });

});

$(window).scroll(function () {

    var scTop = $(this).scrollTop();
    console.log(scTop);

    var winH = $(this).height();
    console.log('브라우저 화면의 높이값: ' + winH);

    var gap = Math.ceil(winH * 0.8); //20퍼센트가 보일 때부터 상자가 등장했으면 좋겠음
    console.log('기준 간격: ' + gap);

    var box1pos = $('.goal').offset().top - gap;
    console.log('1번째 박스 등장 기준값: ' + box1pos);

    if (scTop > box1pos) {
        $('.goal').find('.img-box').animate({
            opacity: 1,
        }, 800, function () {
            $(this).next().fadeIn(1000);
        });
    }

    var box2pos = $('.spirit').offset().top - gap;

    if (scTop > box2pos) {
        $('.spirit').find('.txt-box').fadeIn(800, function () {
            $('.spirit').find('.img-box').animate({
                opacity:1
            },1000);
        });
    }

    var box3pos = $('.philosophy').offset().top - gap;

    if (scTop > box3pos) {
        $('.philosophy').find('.img-box').animate({
            opacity: 1,
        }, 800, function () {
            $(this).next().fadeIn(1000);
        });
    }

});