//heritage.js


//alert('hihihi');

$(document).ready(function () {

    //hover했을 때 lnb 내려오게 하기
    $('.gnb>li').mouseenter(function () {
        $(this).find('.lnb').stop().slideDown(600);
    });

    $('.gnb>li').mouseleave(function () {
        $('.lnb').stop().slideUp(600);
    });

    //탭메뉴 선택
    $('.btn a').click(function () {


        var aHref = $(this).attr('href');
        console.log(aHref);

        //1. 선택된 탭메뉴 변경
        $(this).addClass('on').siblings().removeClass('on');

    });



    //초기 설정
    $('.box1 .txt-box').show();

    //.prev 를 클릭했을 때
    $('.prev').click(function (e) {
        e.preventDefault();
        slide(0);
        change();

    });


    //.next를 클릭했을 때
    $('.next').click(function (e) {
        e.preventDefault();

        slide(1);
        change();

    });


    //.num을 클릭했을 때
    $('.cate').click(function (e) {
        e.preventDefault();

        //$(this).parent().find('.txt-box').show();
        var chg = $(this).parent().attr('class');
        console.log(chg);

        if (chg === 'wrap box2') {
            $(this).parent().animate({
                top: 0,
                left: 0
            }, 500, function () {
                $(this).find('.cate .circle').css({
                    backgroundColor: '#001E63',
                    width: '26px',
                    height: '26px',
                    borderRadius: '20px'
                }).find('.num').css({
                    color: '#001E63'
                }).find('.txt-box').fadeIn(600)
            })

            $()
        }


    });


});

function change() {
    $('.container li').find('.txt-box').hide();
    $('.box1').find('.txt-box').delay(800).fadeIn(600);
}



var stat = 0;
var currentP = 0; //현재 페이지

function slide(direction) {
    var pages = $('.container li');
    var positions = [
        { top: '0', left: '0' }, //1
        { top: '65%', left: '-12%' }, //2
        { top: '65%', left: '-12%' }, //3
        { top: '65%', left: '-12%' }, //3
        { top: '-74%', left: '-14.8%' } //5
    ];

    if (direction) {
        // 다음 이동
        pages.first().insertAfter(pages.last());
    } else {
        // 이전 이동
        pages.last().insertBefore(pages.first());

        /*   if (currentP === 1) {
              pages.last().insertBefore(pages.first());
              currentP = 0;
          } else { 
              pages.last().insertBefore(pages.first());
          } */

    }

    // DOM 순서가 변경된 후 position 값 업데이트
    pages = $('.container li'); // 순서 변경 후 다시 선택
    pages.each(function (index) {
        $(this).animate(positions[index], 500);
    });

    pages.each(function (index) {
        $(this).attr('class', 'wrap box' + (index + 1));
    });

    //잠금해제!
    setTimeout(function () {
        stat = 0;
    }, 500);



}


