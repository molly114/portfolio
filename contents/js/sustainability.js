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
    console.log(total);

});

$(window).scroll(function () {
    var roadTrip = $('.roadtrip').offset().top; //마지막 섹션의 높이
    console.log(roadTrip);

    var scTop = $(this).scrollTop(); //현재 스크롤 위치
    console.log(scTop);

    var idx = $('.achieve').index();
    console.log(idx);

    var gap = 100; //고정변수



    move();

});


function move() {
    //입장확인
    if (stat === 1) return false;
    stat = 1;

    //발생한 이벤트 정보 확인
    var evt = window.event;

    //delta값 구하기
    var delta = evt.wheelDelta ? evt.wheelDelta : evt.detail;
    console.log('마우스 휠 값 :' + delta);

    //파이어폭스 브라우저를 위한 처리!
    var browserInfo = navigator.userAgent; //브라우저 정보 리턴!

    if (/Firefox/i.test(browserInfo)) {
        delta = -evt.detail;
        console.log('파이어폭스 detail: ' + delta);
    }

    if (delta < 0) {
        //델타가 음수라는 건~~~? 다음 페이지로 가긔
        idx++;
        if (idx === total) {
            idx = total - 1;
            scLock = 0;
            console.log('mission clear');
        }
    } else {
        idx--;
        if (idx = 0) {
            scLock = 0;
            console.log('mission clear');
        }
    }

    if(scLock === 0) {
        
    }

}