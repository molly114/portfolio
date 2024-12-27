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

        var currentCate = $(this).index();
        $(this).parent().addClass('active').siblings().removeClass('active');

        // 모든 박스 숨기고 선택한 박스만 보이기
        $('.container li .txt-box').hide(); // 모든 txt-box 숨김
        $(this).css({
            position: 'absolute', // absolute로 위치 조정
            top: '-74%', // 상단으로 이동
            left: '16%' // 좌측으로 이동
        }).$('.container li .txt-box').fadeIn(600); // 선택한 박스의 txt-box 보이기


        $('html, body').animate({
            scrollTop: $(currentCate).offset().top // 타겟 요소까지 스크롤
        }, 600); // 애니메이션 시간 (600ms)

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
        { top: '-74%', left: '-14.8%' } //4
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


