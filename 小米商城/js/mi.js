$(function(){
			//鼠标一入一出
			$(".car-mini").mouseover(function(){
				$(".car-mini").addClass("active");
				$(".menu").slideDown("slow");
			})
			$(".car-mini").mouseout(function(){
				$(".car-mini").removeClass("active");
				$(".menu").slideUp("slow");
			})

			//选项卡
			$(".nav .link").mouseover(function(){
				var index = $(this).index();
				$(".nav .link").removeClass("special");
				$(this).addClass("special")
				$(".header-box .header-nav-menu").eq(index).slideDown().siblings().hide();
			})
			$(".nav .link").mouseout(function(){
				$(".nav .link").removeClass("special");
				$(".header-box .header-nav-menu").hide();
			})
			//改变边框颜色
			$(".search-text").focus(function(){
				$(".search-hot").hide();
				$(".search-text").css({"border-color":"#ff6700"});
				$(".search-btn").css({"border-color":"#ff6700"});
			}).blur(function(){
				$(".search-hot").show();
				$(".search-text").css({"border-color":"#e0e0e0"});
				$(".search-btn").css({"border-color":"#e0e0e0"});
			})

			//轮播
			var index = $(".round span.change").index();
			function toLeft(){
				if(index == 4){index = -1}
					$(".round span").eq(index+=1).addClass("change").siblings().removeClass("change");
					$(".lunbo li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
			}
			function toRight(){
				if(index == 0){index = 5}
					$(".round span").eq(index-=1).addClass("change").siblings().removeClass("change");
					$(".lunbo li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
			}
			$(".turn-left").click(function(){
				toLeft()
			});
			$(".turn-right").click(function(){
				toRight()
			});
			function exportTimer(){
				timer = setInterval(function(){
					toLeft()
				},3000)
			}
			exportTimer();
			$(".turn-left").hover(
				function(){
					clearInterval(timer)
				},
				function(){
					exportTimer()
				}
			)
			$(".turn-right").hover(
				function(){
					clearInterval(timer)
				},
				function(){
					exportTimer()
				}
			)
			$(".round span").hover(
				function(){
					clearInterval(timer)
				},
				function(){
					exportTimer()
				}
			)
			function setChange(index){
				$(".lunbo li").eq(index).fadeIn().siblings().fadeOut();
				$(".round span").eq(index).addClass("change").siblings().removeClass("change");
			}
			$(".round span").click(function(){
				var index = $(this).index();
				setChange(index);
			})

			$(".slider-menu ul li").mouseover(function(){
				$(this).addClass("changed").siblings().removeClass("changed");
				$(this).children(".hideBox").show();
				$(this).siblings().children(".hideBox").hide();
			})
			$(".slider-menu ul li").mouseout(function(){
				$(".slider-menu ul li").removeClass("changed");
				$(".slider-menu ul li").children(".hideBox").hide();
			})
			//home-star轮播
			var nowIndex = $(".more a.con-active").index();
			function left(){
				$(".box-wrapper ul").stop(true,true).animate({
						marginLeft: "-=1240px",
					},500,function(){
						$(".box-wrapper ul").css({"margin-left":"-1240px"})
				})
			}
			function right(){
				$(".box-wrapper ul").eq(nowIndex).stop(true,true).animate({
					marginLeft: "+=1240px",
					},500,function(){
						$(".box-wrapper ul").css({"margin-left":"-1240"})
				})
			}
			function active(){
				if(nowIndex == 1){nowIndex = -1}
					$(".more a").eq(nowIndex+=1).addClass("con-active").siblings().removeClass("con-active");
			}
			function nextLeft(){
				active();
				left();
				right();
			}
			function exportTimer1() {
				timer1 = setInterval(function(){
					nextLeft()
				},2000)
			}
			exportTimer1();
			$(".next-left").hover(
				function(){
					clearInterval(timer1)
				},
				function(){
					exportTimer1()
				}
			)
			$(".next-right").hover(
				function(){
					clearInterval(timer1)
				},
				function(){
					exportTimer1()
				}
			)
			$(".next-left").click(function(){
				var kaiguan = 1;
				if(kaiguan = 1){
					active();
					right();
				}
				kaiguan = 0;
			})
			$(".next-right").click(function(){
				active();
				left();
			})
			//选项卡
			$(".home-right ul li").mouseover(function(){
				var index = $(this).index();
				$(".home-right ul li").removeClass("tab-active");
				$(this).addClass("tab-active");
				$(".tab-right ul").eq(index).show().siblings().hide();
			})
			//触碰事件
			$(".tab-right ul li").mouseover(function(){
				$(this).addClass("box-sha").siblings().removeClass("box-sha");
				var index = $(this).index()
				$(".tabBox").eq(index).slideDown();
			})
			$(".tab-right ul li").mouseout(function(){
				$(".tab-right ul li").removeClass("box-sha");
				$(".tabBox").hide();
			})
			//选中事件
			function setChange(index){
				$(".con-item li").eq(index).fadeIn().siblings().fadeOut();
				$(".con-pagers ul li .dot").eq(index).addClass("round-special").siblings().removeClass("round-special");
			}
			$(".con-pagers ul li .dot").click(function(){
				var index = $(this).index();
				setChange(index);
			})
			//鼠标事件
			$(".video-item").mouseover(function(){
				$(this).addClass("box-sha");
				$(this).css({"margin-top":"-2px"});
			})
			$(".video-item").mouseout(function(){
				$(".video-item").removeClass("box-sha");
				$(".video-item").css({"margin-top":"0"});
			})
			//鼠标选中
			$(".review-list li").mouseover(function(){
				$(this).addClass("box-sha");
				$(this).css({"margin-top":"-2px"});
			})
			$(".review-list li").mouseout(function(){
				$(".review-list li").removeClass("box-sha");
				$(".review-list li").css({"margin-top":"0"});
			})
})