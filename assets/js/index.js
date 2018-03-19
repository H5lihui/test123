$(function(){
	// document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
	// 导航 start
	var mySwiper1 = new Swiper('.nav',{
		// 每个视图展示5个
		slidesPerView: 5,
	})     
	// 导航 end
	// 顶部轮播 start
	var mySwiper2 = new Swiper('.shop-container', {
		loop: true,
		paginationClickable: true,
		autoplay: 3000,
		effect : 'slide',
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	   
	   	bulletClass : 'topbar-bullet',
	   	bulletActiveClass: 'topbar-bullet-active'
  	})     
	// 顶部轮播 end
	// 新品轮播 start
	var mySwiper3 = new Swiper('.news-container', {
	    // 每个视图展示5个
		slidesPerView: 2.5,
  	}) 
	// 新品轮播 end
	// 倒计时 start
	run();
		setInterval(run,1000)
	function run (){
		var d1 = new Date();
		var d2 = new Date('2018-1-8 00:00:00');
		var time = d2-d1;
		var hours =addZero(Math.floor(time/1000/60/60%24));
		var mins = addZero(Math.floor(time/1000/60%60));
		var secs =addZero(Math.floor(time/1000%60));
		$('.time .time-wrap .hours').text(hours);
		$('.time .time-wrap .mins').text(mins);
		$('.time .time-wrap .secs').text(secs);
	}
	function addZero (t){
		if (t<10) {
			t = '0' + t;
		}
		return t;
	}
	// 倒计时 end
	// 专题精选 start
	var mySwiper4 = new Swiper('.zhuan-container', {
	    // 每个视图展示个
		slidesPerView: 1.4,
  	}) 
	// 专题精选 end
	// 返回顶部start
	$(window).scroll(function(){
		// 执行懒加载
		lazyLoading();
		// 固定在顶部 start
		if ($(this).scrollTop() >=348) {
			$('.small').css('display','block');
		}else{
			$('.small').css('display','none');
		}
		// 固定在顶部 end
		if ($(this).scrollTop() >= 800) {
			$('.return').show();
		}else{
			$('.return').hide();   
		}
	})
	$('.return').click(function(){
		var step = -200;
		var nowPo = $(window).scrollTop();
		setInterval(function(){
			if (nowPo <= 0) {
				return;
			}
			$(window).scrollTop(nowPo += step);
		},10)
	})
	// 返回顶部end
	
	// 点击选项时候颜色变化start
	$('.footer .shou-d').click(function(){
		$(this).find('i').removeClass('shou').addClass('shou2');
		$('.shi-d i').removeClass('shi2').addClass('shi');
		$('.fen-d i').removeClass('fen2').addClass('fen');
		$('.che-d i').removeClass('che2').addClass('che');
		$('.ge-d i').removeClass('ge2').addClass('ge');
	})
	$('.footer .shi-d').click(function(){
		$(this).find('i').removeClass('shi').addClass('shi2');
		$('.shou-d i').removeClass('shou2').addClass('shou');
		$('.fen-d i').removeClass('fen2').addClass('fen');
		$('.che-d i').removeClass('che2').addClass('che');
		$('.ge-d i').removeClass('ge2').addClass('ge');
	})
	$('.footer .fen-d').click(function(){
		$(this).find('i').removeClass('fen').addClass('fen2');
		$('.shou-d i').removeClass('shou2').addClass('shou');
		$('.shi-d i').removeClass('shi2').addClass('shi');
		$('.che-d i').removeClass('che2').addClass('che');
		$('.ge-d i').removeClass('ge2').addClass('ge');
	})
	$('.footer .che-d').click(function(){
		$(this).find('i').removeClass('che').addClass('che2');
		$('.shou-d i').removeClass('shou2').addClass('shou');
		$('.fen-d i').removeClass('fen2').addClass('fen');
		$('.shi-d i').removeClass('shi2').addClass('shi');
		$('.ge-d i').removeClass('ge2').addClass('ge');
	})
	$('.footer .ge-d').click(function(){
		$(this).find('i').removeClass('ge').addClass('ge2');
		$('.shou-d i').removeClass('shou2').addClass('shou');
		$('.fen-d i').removeClass('fen2').addClass('fen');
		$('.che-d i').removeClass('che2').addClass('che');
		$('.shi-d i').removeClass('shi2').addClass('shi');
	})
	// 点击选项时候颜色变化end
	// 图片懒加载
	function lazyLoading (){
		// 判断每一个图片，用each循环
		$('.img').each(function(value,key){
			// 如果图片距页面的上边距小于浏览器的滚动距离+浏览器的宽度，就要显示图片
			if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
				var newSrc = $(this).attr('data-src');
				$(this).attr('src',newSrc);
				$(this).removeClass('img');
				// 淡入的效果
				$(this).hide().fadeIn(800);
			}	

		})
	}
	// 初始化调用
	lazyLoading();
})    