//products.js

$(document).ready(function () {

    //hover했을 때 lnb 내려오게 하기
    $('.gnb>li').mouseenter(function () {
        $(this).find('.lnb').stop().slideDown(600);
    });

    $('.gnb>li').mouseleave(function () {
        $('.lnb').stop().slideUp(600);
    });


    //상품 이미지 hover했을 때
    $('.products').hover(function () {
        // mouseenter
        var nowImg = $(this).find('img'); // 현재 이미지 요소
        var srcName = nowImg.attr('src'); // 이미지의 현재 src
        var newSrc = srcName.replace('.', '_b.'); // 파일명 바꾸기

        nowImg.attr('src', newSrc);

    }, function () {
        // mouseleave
        var nowImg = $(this).find('img'); // 현재 이미지 요소
        var srcName = nowImg.attr('src'); // 이미지의 현재 src
        var newSrc = srcName.replace('_b.', '.'); // 파일명 바꾸기

        nowImg.attr('src', newSrc); // 'a.'로 변경
    });

    //페이저 hover 했을 때
    

    //페이저 클릭했을 때
   

});
