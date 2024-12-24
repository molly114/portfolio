//footIdService.js

//alert('hihi');

$(window).scroll(function () {

    //마우스휠 발생 시, gnb 색깔 바꾸기 

    var scTop = $(this).scrollTop();
    var headerTop = $('.gate').outerHeight();

    if (scTop > headerTop) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }

});

$(document).ready(function () {

    //hover했을 때 lnb 내려오게 하기
    $('.gnb>li').mouseenter(function () {
        $(this).find('.lnb').stop().slideDown(600);
    });

    $('.gnb>li').mouseleave(function () {
        $('.lnb').stop().slideUp(600);
    });

    //slider
    //li 한 칸의 크기 구하기
    var liW = $('.slider ul li').width();
    console.log('li 하나의 크기 : ' + liW);

    //이전 버튼 클릭을 대비하여 마지막 li를 첫번째로 이동
    $('.slider ul li:last').prependTo('.slider ul');
    $('.slider ul').css('margin-left', -liW);

    //다음 버튼을 클릭했을 때!
    $('.next').click(function (e) {

        //a태그의 기본이동 막기!
        e.preventDefault();

        $('.slider ul').animate({
            marginLeft: '-=' + liW
        }, 800, function () {
            $('.slider ul li').first().appendTo('.slider ul');
            $('.slider ul').css('margin-left', -liW);
        });


    });


    $('.prev').click(function (e) {

        //a태그의 기본이동 막기!
        e.preventDefault();

        $('.slider ul').animate({
            marginLeft: '+=' + liW
        }, 800, function () {
            $('.slider ul li').last().prependTo('.slider ul');
            $('.slider ul').css('margin-left', -liW);
        });

    });


});

$(window).scroll(function () {

    var scTop = $(this).scrollTop();
    //console.log(scTop);

    var winH = $(this).height();
    //console.log('브라우저 화면의 높이값: ' + winH);

    var gap = Math.ceil(winH * 0.8); //20퍼센트가 보일 때부터 상자가 등장했으면 좋겠음
    // console.log('기준 간격: ' + gap);

    var box1pos = $('.tit').offset().top - gap;
    //console.log('1번째 박스 등장 기준값: ' + box1pos);

    if (scTop > box1pos) {
        $('.tit').animate({
            opacity: 1,
        }, 800);
    }

    var box2pos = $('.footid-des').offset().top - gap;

    if (scTop > box2pos) {
        $('.footid-des').delay(800).animate({
            opacity: 1,
        }, 800);

    }

    var box3pos = $('.footid-des2').offset().top - gap;

    if (scTop > box3pos) {
        $('.footid-des2').delay(800).animate({
            opacity: 1,
        }, 800);
    }

});