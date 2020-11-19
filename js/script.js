$(document).ready(function(){


    /* =============== header =============== */
    
    // 새로고침시 처음으로 이동
    window.onbeforeunload = function () {
        window.scrollTo(0,0);
    };

    // 메뉴 스크롤 고정
    $(window).scroll(function(){
        var sclTop = $(window).scrollTop();

        if(sclTop > 0){
            $('#header').addClass('scroll_on');
        }else{
            $('#header').removeClass('scroll_on');
        }

    // 스크롤 움직임 따라 nav 버튼 색깔 변화
        $contents.each(function () {
            if (Math.floor($(this).offset().top) <= sclTop) {
                var idx = $(this).index();
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }else if($('#history').offset().top > sclTop){
                $menu.removeClass('on');
            };
        });
    });

    // 내비 버튼 클릭시 해당 섹션으로 이동
    var $menu = $('.nav li');
    var $contents = $('body section');

    $menu.click(function (m) {
        m.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');

        var idx = $(this).index();
        var section = $contents.eq(idx + 1);
        var sectionDistance = section.offset().top;

        $('html,body').stop().animate({scrollTop: sectionDistance}, 1000);
    });

    // 햄버거버튼/서브메뉴
    $('.hamburger').on('click', function(){
        if($(this).hasClass('active')){
            $('.hamburger').removeClass('active');
            $('.sub_menu').slideUp();
        }else{
            $('.hamburger').addClass('active');
            $('.sub_menu').slideDown();
        }
        return false;
    });
    
    // 메뉴버튼 클릭 시 메뉴 슬라이드업 (TB & MO)
    $('.nav li').on('click',function(){
        $('.hamburger').removeClass('active');
        $('.sub_menu').slideUp();
    });

    /* =============== header fin =============== */
    
    


    /* =============== product =============== */

    // 밀가루 이름 클릭 시 콘텐츠 노출 (TB & MO)
    $('#product .pd_box').click(function(){
        if ($(this).hasClass('on')){
            $(this).removeClass('on');
        }else{
            $('#product .pd_box').siblings().removeClass('on');
            $(this).addClass('on');
        }
    });

    /* =============== product fin =============== */




    /* =============== 빵지도 =============== */    

    // 빵지도 MORE 버튼 클릭시
    $('.cover_btn').on('click',function(){
        $('.map_main').css('display','block');
        $('.map_cover').css('display','none');
        $('#bbangmap').css('background-color','#fff');

        return false;
    });

    // 빵지도 클릭시, main_sub 변화
    var btnIdx = $('.map_wrap>a').on('click', function() {
        var idx = this.id.substr(3,2);
        var sub_wrap = $('.' + idx);
        var shop_photo = $('.' + idx).children('.shop_photo');

        shop_photo.css('background-image','url(img/sub_' + idx + '.jpg)');
        sub_wrap.show(500);
        sub_wrap.siblings().hide(500);
    });

    // 빵지도에서 close 버튼 클릭시
    $('.cls_btn').on('click',function(){
        $('.map_cover').css('display','block');
        $('.map_main').css('display','none');
        $('#bbangmap').css('background-color','#07abbd');
    });

    // 빵지도에서 뒤로가기 버튼
    $('.shop_btn').on('click',function(){
        $('.main_map').css('display','block');
        $('.sub_wrap').css('display','none');
    });

    /* =============== 빵지도 fin =============== */



    /* =============== footer =============== */

    // family site btn 클릭 시 리스트 업&다운
    $('.ft_btn').on('click', function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(this).siblings().slideUp(); 
        }else{
            $(this).addClass('on');
            $(this).siblings().slideDown();
        }
        return false;
    });

    // 영역 외 클릭 시 family site 닫기
    $('body').click(function (e) {
        if (!$('.ft_list').has(e.target).length) {
            $('.ft_list').slideUp();
            $('.ft_btn').removeClass('on');
        }
    });

    /* =============== footer fin =============== */


});