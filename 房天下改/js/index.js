var i = 0 ;
var timer;
var index;
var a ;
var i;
var Val;
$(document).ready(function(){
	//上边导航条事件
	index=$(this).index();
	$('.nav_box .nav ul li').mouseover(function(){
		// index=$(this).index();
		a=index;
		i=a+1;
		j=a-1;
		$(this).addClass('navTopActive').siblings().removeClass('navTopActive');
		$('.triangle_top').eq(a).css("display","block");
		$('.nav_box .nav ul li .drop_down').eq(index).css("display","block")
		.siblings('.nav_box .nav ul li .drop_down').css("display","none");
	});
	$('.nav_box .nav ul li').mouseout(function(){
		index=$(this).index();
		a=parseInt(index);
		i=a+1;
		$(this).removeClass('navTopActive');
		$('.triangle_top').css("display","none");
		$('.nav_box .nav ul li .drop_down').css("display","none")
	});
	$('.IMG_box .banner_magnr ul li').mouseover(function(){
		var V=$(this).attr("value");
		$('.IMG_box .banner_magnr .txt .INPUT').attr("value",V);
		$(this).addClass('bantriangle_top').siblings().removeClass('bantriangle_top');
	});




	$('.qrcode').mouseover(function(){
		$('.qr_box').css("display","block");
		$(this).css("background","#c00");
	});
	$('.qrcode').mouseout(function(){
		$('.qr_box').css("display","none");
		$(this).css("background","#fff");
	});
	$('.qr_box').mouseover(function(){
		$('.qr_box').css("display","block");
		$('.qrcode').css("background","#c00");
	});
	$('.qr_box').mouseout(function(){
		$('.qr_box').css("display","none");
		$('.qrcode').css("background","#fff");
	});
	$('.nation_a').mouseover(function(){
		$('.nation_box').css("display","block");
	});
	$('.nation_a').mouseout(function(){
		$('.nation_box').css("display","none");
	});
	// $('.nav_box .nav ul li').mouseover(function(){
	// 	$('.nav_box .nav ul li .drop_down').css("display","block");
	// 	// $('.nav_box .nav ul li .triangle_top').css("display","block")
	// });
	// $('.nav_box .nav ul li').mouseout(function(){
	// 	$('.nav_box .nav ul li .drop_down').css("display","none");
	// 	$('.nav_box .nav ul li .triangle_top').css("display","none")
	// });
	var aDiv1=$('.TAB_box .TAB');
	var oA=$('.TAB_box .TAB a');
	var aDiv2=$('.TAB_box .TAB .TAB_txt_box');
	var index=0;
	oA.mouseover(function(){
		index=$(this).index();
		$(this).addClass('TAB_active').siblings().removeClass('TAB_active');
		aDiv2.eq(index).css("display","block").siblings().css('display','none');
	})
	$('.ig').eq(0).show().siblings('.ig').hide();
	  showTime();
	  $('.tab').hover(function(){
	    i = $(this).index();
	    Show();
	    clearInterval(timer);
	  },function(){
	    showTime();
	  });
	   
	  $('.btn1').click(function(){
	    clearInterval(timer);
	    if(i == 0){
	      i = 5;
	    }
	    i--;
	    Show();
	    showTime();
	  });

	  $('.btn2').click(function(){
	    clearInterval(timer);
	    if(i == 4){
	      i = -1;
	    }
	    i++;
	    Show();
	    showTime();
	  });

});
 
 
function showTime(){
  timer = setInterval(function(){
    Show();
    i++;
    if(i==5){
      i=0;
    }
  },2000);
}

function Show(){
  $('.ig').eq(i).fadeIn(300).siblings('.ig').fadeOut(300);
  $('.tab').eq(i).addClass('tabs_active').siblings('.tab').removeClass('tabs_active');
}
