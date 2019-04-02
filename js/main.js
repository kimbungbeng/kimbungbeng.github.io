// JavaScript Document

           $(document).ready(function(){
               $('.thumb a').mouseover(function(){
                   $('.imgBox img').attr('src',$(this).attr("href"));
                   
               });
			   
			   $('.thumb2 a').mouseover(function(){
                   $('.imgBox2 img').attr('src',$(this).attr("href"));
                   
               });
			   
	//햄버거 제이쿼리
    $('.toggle').on('click', function() {
	$('.menu').toggleClass('active');
	});

    //호버시 메뉴 나오는 제이쿼리
    $(".header>.menu>.menuContent>.menu_list").on("mouseenter",function(){
		$('.header>.menu').stop().animate({height:350},300) // 서브메뉴 리스트에 따라  height 길이 바꿀 수 있음. 
	});
	
	$(".header>.menu>.menuContent>.menu_list").on("mouseleave",function(){
		$('.header>.menu').stop().animate({height:70},300) //header 로고와 간격 맞춤
	});
	

	$(window).scroll(function(){
		var num = $(this).scrollTop();
		if(num >= 66){
			$('.menu.active').addClass('on');
			$('.header').addClass('on');
			$('.header h1').addClass('on');
			$('.menu_list > .sub').addClass('on');
			$('.menu_list > .sub ul ol').addClass('on');
			$('.menu span i').addClass('on');
		}else if(num==0){
				//스크롤탑이 0일때 case에 on빼기
				$('.menu.active').removeClass('on');
				$('.header').removeClass('on');
				$('.header h1').removeClass('on');
				$('.menu_list > .sub').removeClass('on');
				$('.menu_list > .sub ul ol').removeClass('on');
				$('.menu span i').removeClass('on');
		}
	});

    $(window).resize(function(){	/* window resize 시작*/
          if(window.innerWidth >= 1250){
	         $('.m_gnb').stop().slideUp(0);
			 $('.m_gnb > li .m_sub').stop().slideUp(0);
			 $('.header').removeClass('on');
	       }
       })/* window resize 끝*/


/*m_gnb 처음 실행시 닫히게 하기*/
    $('.m_gnb').stop().slideUp(0);

/*.btn_menu 클릭시 실행구문*/
	$('.btn_menu').click(function(){
		//toggleClass는 click이벤트 안에서 add,remove를 번갈아 실행해줌
	 $(this).toggleClass('on');
	 
	  if( $('.m_gnb').is(":visible") ){
		  $('.m_gnb').stop().slideUp();
		  $('.m_gnb > li .m_sub').stop().slideUp();
		  $('.m_gnb > li > a').removeClass('underline');
	  }else{
		  $('.m_gnb').stop().slideDown();	 
	  } 
	  
  });


   $('.m_gnb > li > a').removeClass('underline');
   
   /*첫번째 메뉴 클릭시*/
   $('.m_gnb > li:nth-child(1) > a').click(function(){
	    if( $('.m_gnb > li:nth-child(1) .m_sub').is(":visible") ){
		    $('.m_gnb > li:nth-child(1) .m_sub').stop().slideUp(100);
		    $('.m_gnb > li > a').removeClass('underline');
		 }else{
		    $('.m_gnb > li .m_sub').stop().slideUp(100);	 
			$('.m_gnb > li > a').removeClass('underline'); 
		    $('.m_gnb > li:nth-child(1) .m_sub').stop().slideDown(300);
		    $('.m_gnb > li:nth-child(1) > a').addClass('underline');	 
	     } 
	   })
	 /*첫번째 서브메뉴 클릭시*/   
	$('.m_gnb > li:nth-child(1) .m_sub>li').click(function(){
		$('.m_gnb > li:nth-child(1) .m_sub').stop().slideUp(100);
		$('.m_gnb > li > a').removeClass('underline');
		});  
		
 /*두번째 메뉴 클릭시*/
	$('.m_gnb > li:nth-child(2) > a').click(function(){
	    if( $('.m_gnb > li:nth-child(2) .m_sub').is(":visible") ){
		    $('.m_gnb > li:nth-child(2) .m_sub').stop().slideUp(100);
		    $('.m_gnb > li > a').removeClass('underline');
		 }else{
		    $('.m_gnb > li .m_sub').stop().slideUp(100);		
		    $('.m_gnb > li > a').removeClass('underline'); 
		    $('.m_gnb > li:nth-child(2) .m_sub').stop().slideDown(300);
		    $('.m_gnb > li:nth-child(2) > a').addClass('underline');	 
	     } 
	   })
/*두번째 서브메뉴 클릭시*/   
	$('.m_gnb > li:nth-child(2) .m_sub>li').click(function(){
		$('.m_gnb > li:nth-child(2) .m_sub').stop().slideUp(100);
		$('.m_gnb > li > a').removeClass('underline');
		}); 	 
		
/*세번째 메뉴 클릭시*/
	$('.m_gnb > li:nth-child(3) > a').click(function(){
	    if( $('.m_gnb > li:nth-child(3) .m_sub').is(":visible") ){
		    $('.m_gnb > li:nth-child(3) .m_sub').stop().slideUp(100);
		    $('.m_gnb > li > a').removeClass('underline');
		 }else{
		    $('.m_gnb > li .m_sub').stop().slideUp(100);		
		    $('.m_gnb > li > a').removeClass('underline'); 
		    $('.m_gnb > li:nth-child(3) .m_sub').stop().slideDown(300);
		    $('.m_gnb > li:nth-child(3) > a').addClass('underline');	 
	     } 
	   })
/*세번째 서브메뉴 클릭시*/   
	$('.m_gnb > li:nth-child(3) .m_sub>li').click(function(){
		$('.m_gnb > li:nth-child(3) .m_sub').stop().slideUp(100);
		$('.m_gnb > li > a').removeClass('underline');
		}); 	
		
/*네번째 메뉴 클릭시*/
	$('.m_gnb > li:nth-child(4) > a').click(function(){
	    if( $('.m_gnb > li:nth-child(4) .m_sub').is(":visible") ){
		    $('.m_gnb > li:nth-child(4) .m_sub').stop().slideUp(100);
		    $('.m_gnb > li > a').removeClass('underline');
		 }else{
		    $('.m_gnb > li .m_sub').stop().slideUp(100);		
		    $('.m_gnb > li > a').removeClass('underline'); 
		    $('.m_gnb > li:nth-child(4) .m_sub').stop().slideDown(300);
		    $('.m_gnb > li:nth-child(4) > a').addClass('underline');	 
	     } 
	   })
/*네번째 서브메뉴 클릭시*/   
	$('.m_gnb > li:nth-child(4) .m_sub>li').click(function(){
		$('.m_gnb > li:nth-child(4) .m_sub').stop().slideUp(100);
		$('.m_gnb > li > a').removeClass('underline');
		}); 		
		
			   
    });



