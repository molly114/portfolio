var pageCount = 0;
var total;
var stat = 0;
var scLock = 0;

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

    // 슬라이더에 마우스 휠 이벤트 바인딩
    $('.slider').on('mousewheel DOMMouseScroll', function (e) {
        if (scLock === 1) {
            e.preventDefault();
            move(e);
        }
    });
});

$(window).scroll(function () {
    var sliderTop = $('.slider').offset().top;
    var scTop = $(this).scrollTop();
    var windowHeight = $(window).height();

    if (scTop >= sliderTop && scTop < sliderTop + $('.slider').height() - windowHeight) {
        if (scLock === 0) {
            scLock = 1;
            $('body').css('overflow', 'hidden'); // 페이지 스크롤 잠금
        }
    } else {
        if (scLock === 1) {
            scLock = 0;
            $('body').css('overflow', ''); // 페이지 스크롤 해제
        }
    }
});

function move(e) {
    if (stat === 1) return false;
    stat = 1;

    var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;

    if (delta > 0) {
        pageCount--;
        if (pageCount < 0) {
            pageCount = 0;
            scLock = 0;
            $('body').css('overflow', '');
        }
    } else {
        pageCount++;
        if (pageCount >= total) {
            pageCount = total - 1;
            scLock = 0;
            $('body').css('overflow', '');
        }
    }

    $('.slide-wrap').animate({
        left: -(100 * pageCount) + '%'
    }, 800, function () {
        stat = 0;
    });

    menuChange();
}


$('.pager a').click(function (e) {
    e.preventDefault();

    var idx = $(this).index();
    console.log('pager 배열 : ' + idx);
});


////  메뉴변경 함수 
function menuChange() {
    $('.pager a').eq(pageCount - 1).addClass('active').siblings().removeClass('active');
}
