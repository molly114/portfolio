//interview.js--------------------

$(document).ready(function () {

    //hover했을 때 lnb 내려오게 하기
    $('.gnb>li').mouseenter(function () {
        $(this).find('.lnb').stop().slideDown(600);
    });

    $('.gnb>li').mouseleave(function () {
        $('.lnb').stop().slideUp(600);
    });

    //슬라이드------------------------
    var liW = $('.slider ul li').width();
    console.log('li 하나의 크기 : ' + liW);
    var pageCount = 0;
    var total = $('.slider ul li').length;
    console.log(total);


    $('.prev').click(function (e) {
        e.preventDefault();

        if (pageCount > 0) {
            pageCount--;
            $('.slider ul').animate({
                marginLeft: '+=' + liW
            }, 800)
        };
    });

    $('.next').click(function (e) {
        e.preventDefault();

        if (pageCount < total - 1) {
            pageCount++;
            $('.slider ul').animate({
                marginLeft: '-=' + liW
            }, 800)
        };

    });



    //totop ------------------------------
    $('.totop a').click(function (evt) {
        evt.preventDefault();

        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });




});

//스크롤 이벤트 
$(window).scroll(function () {

    //console.log('스크롤 이벤트 발생!!!!');

    //현재 스크롤 위치값 반환!
    var scTop = $(this).scrollTop();
    console.log(scTop);

    // 문서의 전체 높이를 구합니다.
    var docHeight = $(document).height();

    // 문서 높이에 따라 다른 기준점을 설정합니다.
    var threshold = docHeight > 3500 ? 3200 : 2500;

    if (scTop > threshold) {
        $('.totop').fadeIn();
    } else {
        $('.totop').fadeOut();
    }
});