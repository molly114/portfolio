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


    //클릭했을 때 animate
    $('.achieve').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('active')) return;

        var idx = $(this).index();
        console.log('현재 누른 인덱스 값은? ' + idx);

        $('.achieve').removeClass('active').find('.goal-des').css('opacity', 0).end().each(function (i) {
            $(this).animate({
                left: i === idx ? '47%' :
                    i < idx ? (i + 1) * 12 + '%' : ((i - idx) * 20 + 40) + '%'
            }, 500);
        });

        $(this).addClass('active')
            .find('.goal-des')
            .delay(500)
            .animate({ opacity: 1 }, 100);

        console.log('Animation Completed');
    });



});