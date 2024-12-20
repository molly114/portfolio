//workoutTIPS.js-------------------------


$(function () {

    //hover했을 때 lnb 내려오게 하기
    $('.gnb>li').mouseenter(function () {
        $(this).find('.lnb').stop().slideDown(600);
    });

    $('.gnb>li').mouseleave(function () {
        $('.lnb').stop().slideUp(600);
    });

    //hover했을 때

    $('.content .img-box').hover(function () {
        // mouseenter
        var nowImg = $(this).find('img'); // 현재 이미지 요소
        var srcName = nowImg.attr('src'); // 이미지의 현재 src
        var newSrc = srcName.substring(0, srcName.lastIndexOf('a.')); // 'a.' 이전까지의 문자열 추출
        var extension = /[^.]+$/.exec(srcName)[0]; // 확장자 추출 (예: 'jpg', 'png')

        nowImg.attr('src', newSrc + 'b.' + extension); // 'b.'로 변경
    }, function () {
        // mouseleave
        var nowImg = $(this).find('img'); // 현재 이미지 요소
        var srcName = nowImg.attr('src'); // 이미지의 현재 src
        var newSrc = srcName.substring(0, srcName.lastIndexOf('b.')); // 'b.' 이전까지의 문자열 추출
        var extension = /[^.]+$/.exec(srcName)[0]; // 확장자 추출

        nowImg.attr('src', newSrc + 'a.' + extension); // 'a.'로 변경
    });



    //loadMore------------------------------

    //초기설정
    $('.content').hide();
    $('.content').slice(0, 6).show();

    $('#loadMore').on('click', function (e) {
        e.preventDefault();

        var hBox = $('.content:hidden').length;
        console.log('숨겨진 box 갯수: ' + hBox); //12

        //숨겨진 article이 없을 때, loadMore 버튼 숨기기
        if (hBox === 0) {
            $('#loadMore').fadeOut();
        }

        $('.content:hidden').slice(0, 6).slideDown();

        //스크롤 애니메이션 
        var offTop = $(this).offset().top;
        console.log('현재 거리는 :' + offTop);

        $('html, body').animate({
            scrollTop: offTop
        }, 1500);


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

    console.log('스크롤 이벤트 발생!!!!');

    //현재 스크롤 위치값 반환!
    var scTop = $(this).scrollTop();
    console.log(scTop);

    if (scTop > 200) {
        $('.totop').fadeIn();
    } else {
        $('.totop').fadeOut();
    }
});