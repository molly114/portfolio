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
    $('.btn a').click(function (evt) {

        evt.preventDefault();

        var aHref = $(this).attr('href');
        console.log(aHref);

        //1. 선택된 탭메뉴 변경
        $(this).parent().addClass('on').siblings().removeClass('on');

        //2. 클릭된 메뉴와 컨텐츠 내용 매치하기
        $(aHref).addClass('on').siblings().removeClass('on');

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
    $('.cate a').click(function (e) {
        e.preventDefault();

        var numId = $(this).attr('href');
        $(this).parent().addClass('on').siblings().removeClass('on');

        // 모든 박스 숨기고 선택한 박스만 보이기
        $('.container li .txt-box').hide(); // 모든 txt-box 숨김
        $(numId).css({
            position: 'absolute', // absolute로 위치 조정
            top: '0', // 상단으로 이동
            left: '0' // 좌측으로 이동
        }).fadeIn(600); // 선택한 박스의 txt-box 보이기


        $('html, body').animate({
            scrollTop: $(numId).offset().top // 타겟 요소까지 스크롤
        }, 600); // 애니메이션 시간 (600ms)

    });


});

function change() {
    $('.container li').find('.txt-box').hide();
    $('.box1').find('.txt-box').delay(800).fadeIn(600);
}



/* function change() {

    //1. 첫번째 txt-box 없애고 두번째 txt-box 나오기
    $('.box1').find('.txt-box').fadeOut(600).end().next().find('.txt-box').fadeIn(800);

    //2. .active 부여하기
    $('.box1').removeClass('active').next().addClass('active').fadeIn(800);

    //3. .box1의 자리로 .box2를 옮기기
    $('.box2').animate({
        top: 0,
        left: 0
    }, 600, function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //4. .box1을 .box4 자리로 보내기
    $('.box1').animate({
        top: '-100%',
        left: '-35.5%'
    }, 600);

    //5. .box3 나타나기
    $('.box3').delay(600).fadeIn(600);

    //6. .box3을 .box1 자리에 옮기면서 .box2는 .box4 자리로 옮겨가고 .box1은 디스플레이 none처리를 하면서 .box4를 .box3 자리에 옮기기
    $('.box3').animate({
        top: 0,
        left: 0
    }, 600, function () {
        $(this).addClass('active').siblings().removeClass('active');
    }).$('.box2').animate(
        {
            top: '-100%',
            left: '-35.5%'
        }, 600).$('.box1').fadeOut(600).$('.box4').delay(600).fadeIn(600);


}*/

var stat = 0;

function slide(direction) {
    var pages = $('.container li');
    var positions = [
        { top: '0', left: '0' },
        { top: '74%', left: '16%' },
        { top: '74%', left: '16%' },
        { top: '-74%', left: '-16%' }
    ];

    if (direction) {
        // 다음 이동
        pages.first().insertAfter(pages.last());
    } else {
        // 이전 이동
        pages.last().insertBefore(pages.first());
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


