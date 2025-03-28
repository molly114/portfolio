//beyondCarbon.js-------------------------------------
//horizontal slide
var pageCount = 0; //현재 페이지 번호
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

    total = $('.step').length;
    console.log(total);

});

$(window).scroll(function () {

    var lastPage = $('.slider').offset().top; // 마지막 섹션의 위치
    var scTop = $(this).scrollTop(); // 현재 스크롤 위치
    var sliderBottom = lastPage + $('.slider').height();
    var windowHeight = $(window).height();

    console.log('slide섹션의 위치값: ' + lastPage + '\n' + 'scrollTop 위치값: ' + scTop);

    var gap = 100; //고정 변수

    console.log('마지막 섹션 : ' + lastPage);
    console.log('현재 스크롤 : ' + scTop);



    if (scTop >= lastPage && scTop <= lastPage + gap) { // 마지막 페이지에 도달하면
        scLock = 1; // 화면 고정 상태로 변경
        $('.slider').on('mousewheel DOMMouseScroll', function (e) {
            e.preventDefault();
            move();
        });

        $('.pager').css({
            position: 'fixed',
            left: '50%',
            bottom: '17%',
            'transform': 'translateX(-50%)'
        });
    } else {
        scLock = 0; //화면 스크롤 가능

        $('.pager').css({
            position: 'relative',
            left: '',
            bottom: '',
            'transform': ''
        });
    }

});




function move() {

    //입장확인
    //1. 이벤트 핸들러 제어하기 (스크롤 잠금)
    if (stat === 1) return false;
    stat = 1;

    //2. 발생한 이벤트 정보 확인
    var evt = window.event;

    //3. wheelDelta값 구하기 
    var delta = evt.wheelDelta ? evt.wheelDelta : evt.detail;
    console.log('마우스휠 델타값: ' + delta);

    //4. 파이어폭스 브라우저를 위한 처리!
    var browserInfo = navigator.userAgent; //브라우저 정보 리턴!

    if (/Firefox/i.test(browserInfo)) {
        delta = -evt.detail;
        console.log('파이어폭스 detail: ' + delta);
    }

    //5. 마우스 휠 이벤트로 페이지 이동하기
    // 마우스 휠 이동방향 -> 아래, 다음 페이지(오른쪽) / -이동거리
    // 마우스 휠 이동방향 -> 위, 이전 페이지(왼쪽) / +이동거리
    if (delta > 0) {
        //이전페이지 이동 -> 양수, 마우스휠 위로
        pageCount--;
        if (pageCount === -1) {
            pageCount = 0;
            scLock = 0; //전체 스크롤 잠금해제
            console.log('scLock값: ' + scLock);
        }

    } else {
        //다음페이지 이동 -> 음수, 마우스휠 아래로
        pageCount++;
        if (pageCount === total) {
            pageCount = total - 1;
            scLock = 0; //전체 스크롤 잠금해제
            console.log('scLock값: ' + scLock);
        }
    }

    if (scLock === 0) {
        //잠금해제가 되면 휠 이벤트도 제거해!
        console.log('휠이벤트 제거!');
        $('.slider').off('mousewheel DOMMouseScroll')

    }


    //6. 이동
    $('.slide-wrap').animate({
        left: -(100 * pageCount) + '%'

    }, 800, function () {
        console.log('Animation completed');
        stat = 0; //핸들러 실행 허용 상태로 변경!
    });

    menuChange(pageCount);
}

$('.pager a').on('click', function (e) {
    e.preventDefault();

    var targetId = $(this).attr('href');
    var targetPage = $(targetId).offset().top;
    var pageCount = $(this).index();

    console.log(targetPage);

    $('.slide-wrap').animate({
        left: -(100 * pageCount) + '%'
    }, 800);

    menuChange(pageCount);
});


////  메뉴변경 함수 
function menuChange(pageCount) {
    $('.pager a').removeClass('active');
    $('.pager a').eq(pageCount).addClass('active');

}



