
 	var _index=0;
 	var _index1=0;
 	var _index2=0;
 	var time;
 	var time1;
 	var time2;
 	function autoplay(){
 		$(".right .but span").removeClass("hover");
 		$(".right .but span").eq(_index).addClass("hover");
 		$(".right .nav_con .pic img").eq(_index).fadeIn().siblings().fadeOut();
 	}
 	function autoplay1(){
 		$(".lunbo .but span").removeClass("hover");
 		$(".lunbo .but span").eq(_index1).addClass("hover");
 		$(".lunbo .nav_con .pic img").eq(_index1).fadeIn().siblings().fadeOut();
 	}
 	function autoplay2(){
 		$(".lunbo2 .but span").removeClass("hover");
 		$(".lunbo2 .but span").eq(_index2).addClass("hover");
 		$(".lunbo2 .nav_con .pic img").eq(_index2).fadeIn().siblings().fadeOut();
 	}
 	function change(){
 		_index++;
 		if(_index>3){
 			_index=0;
 		}
 		autoplay();
 	}
 	function change1(){
 		_index1++;
 		if(_index1>3){
 			_index1=0;
 		}
 		autoplay1();
 	}
 	function change2(){
 		_index2++;
 		if(_index2>3){
 			_index2=0;
 		}
 		autoplay2();
 	}
 	time=setInterval(change,1000);
 	time1=setInterval(change1,1500);
 	time2=setInterval(change2,2000);

 // 	$(".right .nav_con .but span").hover(function(){
	// 	_index=$(this).index();
	// 	autoplay();
	// 	clearInterval(time);
	// },function(){
	// 	time=setInterval(bian,3000);
	// })
