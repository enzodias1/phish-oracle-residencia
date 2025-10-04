// 自适应响应式页面需加上以下js，为了使文字能够自适应页面改变html的字体大小
$(function () {
    getRem();
    window.onresize = function () {
        getRem();
    };
})

function getRem() {
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    var fontSize = (oWidth / 750) * 16;
    if (fontSize > 16) {
        fontSize = 16;
    }
    html.style.fontSize = fontSize + "px";
}



//图片新闻
// var mySwiper = new Swiper('.swiperPic .swiper', {
// 	watchOverflow: true,//因为仅有1个slide，swiper无效
// 	direction: "horizontal",//水平方向切换 horizontal 或垂直方向切换 vertical
// 	speed:300,//切换速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间
// 	effect: 'slide',//"fade"（淡入）
// 	loop: true,
// 	// autoplay: true,//可选选项，自动滑动
// 	autoplay: {
// 		delay: 5000,
// 		stopOnLastSlide: false,
// 		disableOnInteraction: false,
// 		pauseOnMouseEnter: true,
// 	},
// 	simulateTouch : false,//禁止鼠标模拟 鼠标模拟手机触摸。默认为true，Swiper接受鼠标点击、拖动
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	pagination: {
// 		el: ".swiper-pagination",
// 		clickable: true,
// 	},
// })

$(function(){
	
	//通用页签
	$(".tabbox-hd a").mouseenter(function(){
		$(this).addClass("on").siblings().removeClass("on")
		$(this).parent(".tabbox-hd").siblings(".tabbox-bd").find(".tabbox-bd-con").hide().eq($(this).index()).show()
	})

	$(".zwfwpt-hd span").mouseenter(function(){
		$(this).addClass("on").siblings().removeClass("on")
		$(this).parents(".zwfwpt").siblings(".zwfwpt-bd").find(".zwfwpt-bd-con").hide().eq($(this).index()).show()
	})





	//政务公开 -  政策查询
	$(".zwgk-zccx-bd-btn").click(function(){
		if($(this).parents(".zwgk-zccx").hasClass("zwgk-zccx-show")){
			$(this).parents(".zwgk-zccx").removeClass("zwgk-zccx-show")
		}else{
			$(this).parents(".zwgk-zccx").addClass("zwgk-zccx-show")
		}
	})

	$(".tabbox-hds3 div a").mouseenter(function(){
		$(this).addClass("on").siblings().removeClass("on")
		$(this).parents(".tabbox-hds3").siblings(".tabbox-bd").find(".tabbox-bd-con").hide().eq($(this).index()).show()
	})

	$(".tabbox-hds4 div a").mouseenter(function(){
		$(this).addClass("on").siblings().removeClass("on")
		$(this).parents(".tabbox-hds4").siblings(".tabbox-bd").find(".tabbox-bd-con").hide().eq($(this).index()).show()
	})


})