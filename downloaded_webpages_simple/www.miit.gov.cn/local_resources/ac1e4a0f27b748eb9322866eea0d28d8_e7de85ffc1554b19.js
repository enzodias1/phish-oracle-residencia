$(".zjdcDate").each(function(){
	if( parseInt($(this).attr("date-end")) < Math.round(new Date().getTime())  ){
		$(this).text('已结束');
		$(this).addClass('yjzj-off');
	}else{
		$(this).text('征集中');
		$(this).addClass('yjzj-on');
	}
})