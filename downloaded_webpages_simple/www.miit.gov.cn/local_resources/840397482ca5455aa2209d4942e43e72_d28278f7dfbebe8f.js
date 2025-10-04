$(".cmain img").removeAttr("title");
//URL参数值获取getQueryString  bottom9.jsnew
function getQueryString(name) {
       var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
       var r = window.location.search.substr(1).match(reg);
       if(r != null) {
             return decodeURIComponent(r[2]);
       }
       return '';
}



if (String.prototype.trim) {
    // console.log("支持trim");
}else{
    // console.log("不支持trim");
    String.prototype.trim = function () {
        return this.replace(/^\s*|\s*$/g, "");
    }
}


// if($(".mnav a").length > 0){
// 	$(".mnav a").each(function(){
// 		if($(this).text().trim() == "直播访谈"){
// 			$(this).text("新闻发布会");
// 			$(this).attr("href","/xbymdz/xwfb/xwfbh/index.html")

// 			$(".mnav a").each(function(){
// 				if($(this).text().trim() == "互动交流" || $(this).text().trim() == "公众参与"){
// 					$(this).text("新闻发布");
// 					$(this).attr("href","/xbymdz/xwfb/index.html")
// 				}
// 			})
// 		}
// 	})
// }


//2024.7.17-新版
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


//新版页面
document.writeln("<link href=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/public_base.css\" rel=\"stylesheet\" />");
document.writeln("<link href=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/0New_tylmy.css\" rel=\"stylesheet\" />");
document.writeln("<link href=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/2024lkq_base.css\" rel=\"stylesheet\" />");
document.writeln("<script src=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/2024lkq_base.js\"></script>");
document.writeln("<script src=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/2024sc_base.js\"></script>");

document.writeln("<div class=\"mob-bottom\">");
document.writeln("	<a href=\"javascript:void(0);\" class=\"btm01 m-destop\"><img height=\"20\" src=\"/cms_files/filemanager/picture/20203/87a26ea2ac994dd1a42fb1d25653a0f4.png\">电脑版网站</a>");
document.writeln("	<a href=\"https://bzxx.miit.gov.cn/qa/znzx/main\" class=\"btm02\"><img height=\"24\" src=\"/cms_files/filemanager/1226211233/picture/20222/c839e24f7e7841c990029b048d5a386a.png\">阳光小信</a>");
document.writeln("</div>");
document.writeln("<div class=\"bottom\">");
document.writeln("	<div class=\"page-con\">");
document.writeln("		<div class=\"bottom-t\">");
document.writeln("			<a href=\"https://www.gov.cn/\" target=\"_blank\">中国政府网</a>");
document.writeln("			<a href=\"/zzjg/index.html#dfzgbm\" target=\"_blank\">地方主管部门</a>");
document.writeln("			<a href=\"/zzjg/index.html#bsdw\" target=\"_blank\">部属单位</a>");
document.writeln("			<a href=\"/zzjg/index.html#zsgx\" target=\"_blank\">直属高校</a>");
document.writeln("			<a href=\"https://www.miit.gov.cn/wzdt/index.html\" target=\"_blank\">网站地图</a>                      ");
document.writeln("		</div>");
document.writeln("		<div class=\"bottom-b\">");
document.writeln("			<div class=\"bottom-bl\">");
document.writeln("				<!-- <script id=\"_jiucuo_\" sitecode=\"bm07000001\" src=\"https://zfwzgl.www.gov.cn/exposure/jiucuo.js\"></script>                    -->");
document.writeln("				<a href=\"http://bszs.conac.cn/sitename?method=show&amp;id=072863338FF66940E053022819ACCE02\"><img class=\"bottom-bl-img2\" src=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/bottom_img01.png\" /></a>    ");
document.writeln("				<a><img class=\"bottom-bl-img2\" src=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/bottom_img02.png\" /></a>    ");
document.writeln("				<a class=\"mob-show\"><img src=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/bottom_img03.png\" /></a>   ");
document.writeln("			</div>");
document.writeln("			<div class=\"bottom-bm\">");
document.writeln("				<p><span>主办单位：中华人民共和国工业和信息化部</span><span>地址：中国北京西长安街13号</span><span>邮编: 100804</span></p>");
document.writeln("				<p><span>版权所有：中华人民共和国工业和信息化部</span><span>网站标识码：bm07000001</span></p>");
document.writeln("				<p><span><a href=\"https://beian.miit.gov.cn/\" target=\"_blank\">京ICP备04000001号-2</a></span><span><a href=\"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11040102700068\" target=\"_blank\"><img style=\"top: -1px;margin-right: 3px;\" src=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/bottom_img04.png\" />京公网安备 11040102700068号</a></span></p>                      ");
document.writeln("			</div>   ");
document.writeln("			<div class=\"bottom-br\">");
document.writeln("				<a href=\"https://zfwzgl.www.gov.cn/exposure/jiucuo.html?site_code=bm07000001&url=https%3A%2F%2Fwww.miit.gov.cn%2Fgxsj%2Findex.html\"><img src=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/bottom_img03.png\" /></a>                    ");
document.writeln("			</div>   ");
document.writeln("		</div>");
document.writeln("	</div>");
document.writeln("</div>");

/*访问站外链接地址*/
if (window.location.href.indexOf('/zzjg/index.html') > -1 && $('.dwalink_remove').length > -1) {
	// console.log("组织机构页面")
	function inArray(sstr, sarry) {
		var newnum = -1;
		for (var sdai = 0; sdai < sarry.length; sdai++) {
			if (sstr.indexOf(sarry[sdai]) > -1) {
				newnum = sstr.indexOf(sarry[sdai]);
			}
		}
		return newnum;
	}
	//sstr.includes(sarry[i])
	function linkJump(_obj, e) {
		e = e || window.event;
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		var gourl = _obj.attr('href');
		if (gourl) {
			tmpurl = gourl.indexOf('://') == -1 ? gourl : gourl.substring(gourl.indexOf('://') + 3);
			godomain = tmpurl.indexOf('/') != -1 ? tmpurl.substring(0, tmpurl.indexOf('/')) : tmpurl;
			godomain = godomain.indexOf(':') == -1 ? godomain : godomain.substring(0, godomain.indexOf(':'));
			var filterUrl = new Array('www.miit.gov.cn', 'ythzxfw.miit.gov.cn', 'javascript:void(0)', '#',"www.gov.cn");
			if (gourl.indexOf("http") > -1) {
				if (inArray(godomain, filterUrl) == -1) {
					if ($('#moe_black').size() > 0) $('#moe_black').remove();
					var strlink =
						'<div id="moe_black"><div id="moe_golink"><p id="golink_close"><img src="/cms_files/filemanager/1226211233/picture/20247/3e7c60d6ef774b0f9ac4e4068db779a3.png" /></p><div id="golink_info">您访问的链接即将离开<br /><span>“中华人民共和国工业和信息化部”门户网站</span><br />是否继续？</div></div></div>';
					$('body').append(strlink);
					var tm = $('#moe_black');
					var infoBox = $('#moe_golink');
					var closeBtn = $('#golink_close').find('img');
					//var infoTop = ($(window).height()-277)/2;
					var infostr = '<div id="golink_btn"><a href=' + gourl +
						' target="_blank">继续访问</a><strong>取消</strong></div>';
					tm.height($(document).height()).show();
					infoBox.append(infostr).show();
					var goBtn = $('#golink_btn');
					var goLink = goBtn.find('img');
					var CancelBtn = goBtn.find('strong');
					var CancelBtnA = goBtn.find('a');
					goLink.click(function () {
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});
					closeBtn.click(function () {
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});
					CancelBtn.click(function () {
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});
					CancelBtnA.click(function () {
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});
				} else {
					if (_obj.attr('target') == "_blank") {
						window.open(gourl, '_blank');
					} else {
						window.location.href = gourl;
					}
				}
			} else {
				if (_obj.attr('target') == "_blank") {
					window.open(gourl, '_blank');
				} else {
					window.location.href = gourl;
				}
			}
		}
	}
} else {
	// console.log("NO机关司局")
	/*访问站外链接地址*/
	function inArray(sstr, sarry) {
		var newnum = -1;
		for (var sdai = 0; sdai < sarry.length; sdai++) {
			if (sstr.indexOf(sarry[sdai]) > -1) {
				newnum = sstr.indexOf(sarry[sdai]);
			}
		}
		return newnum;
	}
	//sstr.includes(sarry[i])
	function linkJump(_obj, e) {
		e = e || window.event;
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		var gourl = _obj.attr('href');
		if (gourl) {
			tmpurl = gourl.indexOf('://') == -1 ? gourl : gourl.substring(gourl.indexOf('://') + 3);
			godomain = tmpurl.indexOf('/') != -1 ? tmpurl.substring(0, tmpurl.indexOf('/')) : tmpurl;
			godomain = godomain.indexOf(':') == -1 ? godomain : godomain.substring(0, godomain.indexOf(':'));
			var filterUrl = new Array('www.miit.gov.cn','.miit.gov.cn', 'ythzxfw.miit.gov.cn', 'javascript:void(0)', '#',"www.gov.cn");
			if (gourl.indexOf("http") > -1) {
				if (inArray(godomain, filterUrl) == -1) {
					if ($('#moe_black').size() > 0) $('#moe_black').remove();
					var strlink =
						'<div id="moe_black"><div id="moe_golink"><p id="golink_close"><img src="/cms_files/filemanager/1226211233/picture/20247/3e7c60d6ef774b0f9ac4e4068db779a3.png" /></p><div id="golink_info">您访问的链接即将离开<br /><span>“中华人民共和国工业和信息化部”门户网站</span><br />是否继续？</div></div></div>';
					$('body').append(strlink);
					var tm = $('#moe_black');
					var infoBox = $('#moe_golink');
					var closeBtn = $('#golink_close').find('img');
					//var infoTop = ($(window).height()-277)/2;
					var infostr = '<div id="golink_btn"><a href=' + gourl +
						' target="_blank">继续访问</a><strong>取消</strong></div>';
					tm.height($(document).height()).show();
					infoBox.append(infostr).show();
					var goBtn = $('#golink_btn');
					var goLink = goBtn.find('img');
					var CancelBtn = goBtn.find('strong');
					var CancelBtnA = goBtn.find('a');
					goLink.click(function () {
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});
					closeBtn.click(function () {
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});
					CancelBtn.click(function () {
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});
					CancelBtnA.click(function () {
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});
				} else {
					if (_obj.attr('target') == "_blank") {
						window.open(gourl, '_blank');
					} else {
						window.location.href = gourl;
					}
				}
			} else {
				if (_obj.attr('target') == "_blank") {
					window.open(gourl, '_blank');
				} else {
					window.location.href = gourl;
				}
			}
		}
	}
}

document.writeln("<style>");
document.writeln("#moe_black{display:none;position:absolute;top:0;left:0;z-index:999;width:100%;height:100%;}");
document.writeln("#moe_black #moe_golink{display:none;position:fixed;z-index:1000;top:0;right:0;bottom:0;left:0;margin:auto;width:560px;height:230px;background:rgb(242,246,255);border-radius:10px;color:#4b4b4b;border:2px solid rgb(86,127,230)}");
document.writeln("#moe_black #moe_golink p{text-align:right;margin-top:-30px}");
document.writeln("#moe_black #moe_golink p img,");
document.writeln("#moe_black #golink_btn strong{cursor:pointer;}");
document.writeln("#moe_black #golink_info{margin:30px 30px 15px;padding-bottom:15px;border-bottom:1px solid #7994d7;font-size:24px;text-align:center;line-height:36px}");
document.writeln("#moe_black #golink_info span{color:#054696;font-weight:bold;}");
document.writeln("#moe_black #golink_btn{text-align:center;line-height:41px;font-size:18px}");
document.writeln("#moe_black #golink_btn a{color:#fff;background:#054696;display:inline-block;padding:0 15px;border-radius:5px}");
document.writeln("#moe_black #golink_btn strong{margin-left:50px;}");
document.writeln("#moe_black #golink_info img,#golink_btn img{vertical-align:middle}");
document.writeln("@media print {");
document.writeln("  @page {");
document.writeln("    size: 1280px; //页面大小自动，防止打印版不全");
document.writeln("    margin: 5mm; //页面边距的设定");
document.writeln("  }");
document.writeln("}");
document.writeln("</style>");

$(function(){
	if($('.mnav').length > 0){
		if($('.mnav').prev("div").length > 0){
			if($('.mnav').prev("div").attr("style") != undefined){
				if($('.mnav').prev().css("background-image").indexOf("/7037090.png") > -1){
				    $('.mnav').prev().addClass("newxhxDiv")
				}
			}
		}
	}


	// 清除原3级栏目 图标“»”
	$(".ctree dl a").each(function () {
	    var lmCont = $(this).text().trim().replace(/»/g, '')
	    // lmCont = content.replace(/»/g, '')
	    $(this).text(lmCont);
	});

	$('a').click(function(event){linkJump($(this),event)});	
})





//document.writeln("<script defer async type=\"text/javascript\" src=\"//gov.govwza.cn/dist/aria.js?appid=ebea76f0dad67fde57b8367c5106f53d\" charset=\"utf-8\"></script>");
document.writeln("<script defer async type=\"text/javascript\" src=\"//gov.govwza.cn/dist/aria.js?appid=ebea76f0dad67fde57b8367c5106f53d\" charset=\"utf-8\" wapForceOldFixed=\"false\" loadData=\"false\" id=\"ariascripts\"></script>");


/*手机版电脑版切换*/
//存入cookies
function setCookie(key,value){
	document.cookie=key+"="+value+"; path= /";
}

//cookies 取值
function getCookie01(name){
	var strcookie = document.cookie;//获取cookie字符串
	var arrcookie = strcookie.split("; ");//分割
	//遍历匹配
	for ( var i = 0; i < arrcookie.length; i++) {
		var arr = arrcookie[i].split("=");
		if (arr[0] == name){
			return arr[1];
		}
	}
	return "";
}

$("body").append("<div class=\"am-mobilize-btn\" id=\"am-mobilize-btn\" style=\"display:none;border-top-left-radius: 10px; border-top-right-radius: 10px; background-color: rgb(239, 239, 239); z-index: 1000000000; position: fixed; right: 10px; bottom: 10px; width: 213.889px; height: 213.889px;\"><div id=\"am-btn-icon-return\" style=\"position: absolute; text-align: center; left: 0px; bottom: -6px; background-color: rgb(239, 239, 239); border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; width: 213.889px; font-size: 30.5556px;\">返回手机版</div><div class=\"am-mobilize-btn-inner\" id=\"am-mobile-btn-inner\" style=\"position: absolute; width: 69%; height: 69%; left: 50%; top: 50%; margin-top: -40%; margin-left: -34.5%;\"><div id=\"am-btn-icon-red\" style=\"position: absolute; transition-property: all; transition-timing-function: linear; transition-duration: 0.5s; background-color: rgb(254, 135, 94); width: 66%; left: 17%; height: 110%; top: -5%; border-radius: 5px;\"></div><div id=\"am-btn-icon-blue\" style=\"position: absolute; transition-property: all; transition-timing-function: linear; transition-duration: 0.5s; background-color: rgb(84, 193, 220); width: 8%; right: 46%; height: 8%; bottom: 0px; border-radius: 100%;\"></div><div id=\"am-btn-icon-green\" style=\"position: absolute; transition-property: all; transition-timing-function: linear; transition-duration: 0.5s; background-color: rgb(169, 218, 91); border-radius: 0px; width: 54%; right: 23%; height: 85%; top: 0px;\"></div></div></div>");


//机关司局当前位置去掉链接	
for(var i=0;i<$('.mnav span a').length;i++){
	if($('.mnav span a').eq(i).text()=='机关司局'){
		$('.mnav span a').eq(i).removeAttr('href')
	}
}
	

function ptauto(){
	$("head").append('<meta name="viewport" content="width=device-width, initial-scale=1">');

	if($("div").hasClass("common_one")){
		$(".common_one dd a").each(function(){
			$(this).parents(".common_one").next(".common_one_wrap").find("ul").eq($(this).index()).find("li").last().after('<p class="pdy-more"><a href='+$(this).attr("href")+'>更多>></a></p>');
		});
	}

	$(".gxsj-title2").append('<span class="gxsj-more2"></span>')
	$(".gxsj-title2 > a").each(function(){
		$(this).siblings(".gxsj-more2").append('<a href='+$(this).attr('href')+'>更多>></a>');
	});
	$(".gxsj-title2 > a").click(function(){
		$(this).siblings(".gxsj-more2").find("a").hide().eq($(this).index()).show();
	});
	
	$(".common_one dd > a").each(function(){
		$(this).removeAttr("href");
	});

}

function pc(){
	$("#am-mobilize-btn").show();
	$(".wza_pc").hide();
	$(".wza_phone").show(); //移动版无障碍按钮
	

		$("body").append("<style>html{font-size:16px !important;min-width:1400px !important;}</style>");
		document.writeln("<script src=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/pc_base.js\"></script>");
		document.writeln("<script src=\"/cms_files/filemanager/1226211233/script/20247/994ba6128bda4cdb9127f0fd42ff5418.js\"></script>");
		

	$("#am-mobilize-btn").click(function(){
		setCookie('model', '');

		// if(window.location.href == "http://www.miit.gov.cn/" || window.location.href == "https://www.miit.gov.cn/" || window.location.href == "http://www.miit.gov.cn/index.html" || window.location.href == "https://www.miit.gov.cn/index.html" || window.location.href == "http://miit.gov.cn/" || window.location.href == "https://miit.gov.cn/"  || window.location.href == "http://miit.gov.cn/index.html"  || window.location.href == "https://miit.gov.cn/index.html" ){
		// 	window.location.href='/wap/';
		// }
		window.location.reload();
	});
}

function mob(){
	$(function(){
		$(".m-destop").click(function(){
			setCookie('model', 'destop');
			$(".am-mobilize-btn").show();
			if(window.location.href == "http://wap.miit.gov.cn/" || window.location.href == "https://wap.miit.gov.cn/" || window.location.href == "http://wap.miit.gov.cn/index.html" || window.location.href == "https://wap.miit.gov.cn/index.html"){
				window.location.href='/';
			}
			location.reload();
		});
	});
	if( window.location.href.indexOf("/threestrategy/") == -1){
		document.writeln("<script src=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/mob_base.js\"></script>");
	}

}

/*判断文件是否存在*/
function isInclude(name){
	var js= /js$/i.test(name);
	var es=document.getElementsByTagName(js?'script':'link');
	for(var i=0;i<es.length;i++) 
	if(es[i][js?'src':'href'].indexOf(name)!=-1)return true;
	return false;
}


//获取平台类型
var model=getCookie01("model");

var useragent = navigator.userAgent;
if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('iPad') != -1 || useragent.indexOf('Android') != -1) {


	//判断平台不是电脑版
	if(model!="destop"){
		/*只有手机版加载，文件更新在模板组-手机版*/
		$("body").append('<div class="wza_phone_bg" style="width: 25px;overflow:hidden;position:fixed;right: 0;bottom: 20px;z-index:10;background: #0051A7;text-align: center;border-radius: 5px 0 0 5px;"><a href="javascript:void(0)" onclick="aria.oldFixedStart()" style="color: #ffffff;font-size: 12px;writing-mode: vertical-rl;letter-spacing: 3px;padding-top: 5px;">无障碍浏览</a></div>');


		//判断访问电脑版首页
		if(isInclude("/mediaLayout.css") == false){
			document.writeln("<link href=\"/cms_files/webmiit/tplobject/gxbsy/901e6342877e41678c450cf32ab7e7af/images/mediaLayout.css\" type=\"text/css\" rel=\"stylesheet\">");
			document.writeln("<script type=\"text/javascript\" src=\"/cms_files/webmiit/tplobject/gxbsy/901e6342877e41678c450cf32ab7e7af/images/mediaMain.js\"></script>");
		}
		//新版手机版样式
		if(isInclude("/2024mob_base.css") == false && window.location.href.indexOf("/threestrategy/") == -1){
			document.writeln("<link href=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/2024mob_base.css\" rel=\"stylesheet\" />");
		}

		// if(window.location.href == "http://www.miit.gov.cn/" || window.location.href == "https://www.miit.gov.cn/" || window.location.href == "http://www.miit.gov.cn/index.html" || window.location.href == "https://www.miit.gov.cn/index.html" || window.location.href == "http://miit.gov.cn/" || window.location.href == "https://miit.gov.cn/"  || window.location.href == "http://miit.gov.cn/index.html"  || window.location.href == "https://miit.gov.cn/index.html"  || window.location.href == "http://wap.miit.gov.cn/" || window.location.href == "https://wap.miit.gov.cn/"  || window.location.href == "http://wap.miit.gov.cn/index.html"  || window.location.href == "https://wap.miit.gov.cn/index.html" ){
		// 	window.location.href='/wap/';
		// }
		ptauto();
		mob();
		// $(".mnav a").first().attr("href","/wap/");

		if(window.location.href.indexOf('/gzcy/') != -1 ){
			$("#Map area").first().attr("href","http://www.miit.gov.cn/bzxx/wap/reply/link");
		}	
		
	}else{
		//判断访问移动版首页
		// if(window.location.href.indexOf('/wap/') != -1 ){
		// 	window.location.href = '/';
		// }

		pc();
	}


} else {


		document.writeln("<script src=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/pc_base.js\"></script>");

	//电脑平台
	if($(".head").attr("ergodic") == undefined){
		$(".head").attr("ergodic","navigation");
	}
	if($(".nav").attr("ergodic") == undefined){
		$(".nav").attr("ergodic","navigation");
	}
	if($(".xwdt_tu").attr("ergodic") == undefined){
		$(".xwdt_tu").attr("ergodic","view");
	}
	if($(".lmy-wrapper .clist_con").attr("ergodic") == undefined){
		$(".lmy-wrapper .clist_con").attr("ergodic","view");
	}
	if($(".wzy-wrapper .cmain").attr("ergodic") == undefined){
		$(".wzy-wrapper .cmain").attr("ergodic","article");
	}
}

document.writeln("<style>");
document.writeln(".pdy-more a{float:right;}}");
document.writeln("a br{display:none !important;}");//隐藏a标签里br
document.writeln("</style>");




//document.writeln("<div class=\"fdsy\">测试网站</div>");
//document.writeln("<style>.fdsy{position:fixed;top:35px;line-height:1;left:0px;z-index:999999998;font-size: 41px;color: #000;filter:alpha(opacity=30);-moz-opacity:0.3;-khtml-opacity: 0.3;opacity: 0.3;}@media screen and (max-width: 850px){.fdsy{font-size:20px;writing-mode:tb-rl;left:auto;right: 0;top:0;}}</style>");



/*判断*/
if(isInclude("/main.css") == false){
	$("head").append('<link href="/cms_files/webmiit/tplobject/gxbsy/7cdb63ce84fc43b8a14ef96215171444/images/main.css" rel="stylesheet">');
}

//插入无障碍
//document.writeln("<script id=\"barrierfree\" src=\"/cms_files/filemanager/accessiblereading/load.js\"></script>");


if(window.location.href.indexOf('/wzpz/syxl/') == -1){
	document.writeln("<script src=\"/cms_files/filemanager/script/juba/jubascript.js\"></script>");
}

$(function(){
	//机关司局底部转换
	if($(".sjjg-pdy").length ==1 || $(".sjjg-lby").length ==1){
		if($(window).width()<750){
			if($("html").width() >1099){
				$(".foot").show();
				$("div.mob-foot,div.mob-bottom").hide();
			}else{
				$(".foot").hide();
				$("div.mob-foot").css("display","flex");
				$("div.mob-bottom").show();
			}
		}
	}
	
	//手机版插入网站纠错
	$(".mfooter-bz").before($("#_span_jiucuo").prop("outerHTML"))
});

/*领导子站-来源隐藏*/
if($("div.mnav").length != 0){
	var dn = $("div.mnav").html();
	if(dn.indexOf("领导子站") != -1 && dn.indexOf("个人简历") != -1){
		$(".cinfo span").eq(1).remove();
	}
	if(dn.indexOf("领导子站") != -1 && dn.indexOf("主管工作") != -1){
		$(".cinfo span").eq(1).remove();
	}
}


//过滤地址
if($("div.ccontent").length > 0){
	var str =$("div.ccontent").html();
	var words = "https://jyhwzhq.miit.gov.cn";
	var regExp=new RegExp(words,"gmi");
	str = str.replace(regExp,"");
	$("div.ccontent").html(str);
}
// $(function(){
// 	if($("div.content").length > 0){
// 		var str =$("div.content").html();
// 		var words = "https://jyhwzhq.miit.gov.cn";
// 		var regExp=new RegExp(words,"gmi");
// 		str = str.replace(regExp,"");
// 		$("div.content").html(str);
// 	}
// })


//公告令转换
var txt=$(".xxgk-fwzh").text();
if($(".xxgk-span5").text().length > 0){
	$(".xxgk-box").show();
	$(".cinfo").hide();
	if(txt.indexOf("告") != -1){
		$(".cwhdiv").show();
		txt1 = txt.substr(0, txt.indexOf('告')+1);
		txt21 = txt.substr(txt.indexOf('告')+1,5);
		txt22 = txt.substr(txt.indexOf('第'));
		$("#con_title").text(txt1);
		$(".cwhdiv-l").text(txt21);
		$(".cwhdiv-r").text(txt22).css("padding-left","15px");
	}else if(txt.indexOf("令") != -1){
		$(".cwhdiv").show();
		txt1 = txt.substr(0, txt.indexOf('令')+1);
		txt22 = txt.substr(txt.indexOf('第'));
		$("#con_title").text(txt1);
		$(".cwhdiv-r").text(txt22);
	}
}


function addgxbCss(){
	if($('.top_t11').length>0||$(".mudule2S").length==1){
	  $('.pclog img').attr('src','/cms_files/filemanager/1226211233/picture/20222/ac606e43c9b24276b75d7847da79b96c.png');
	  //clearInterval(gxbCssTimeer);
	  //clearInterval(gxbCssTimeer);

	}else{
		document.writeln("<style>");
		document.write(".wzy-wrapper .cmain{");
		document.write("    overflow: hidden!important;");
		document.write("}");
		document.write(".fk{");
		document.write("    display: none!important;");
		document.write("}");
		document.write(".head .h_right ul li.take:before{");
		document.write("    content:none!important;");
		document.write("}");
		//document.write(".mudule2S{");
		//document.write("        background: none!important;");
		//document.write("}");
		document.write("#search-form{");
		document.write("    overflow: hidden!important;");
		document.write("}");
		document.write(".nav_curr{");
		document.write("        border-bottom: none;!important;");
		document.write("}");
		document.write(".footWrapd {");
		document.write("    background: #666666!important;");
		document.write("}");
		document.write(".nav a:hover{");
		document.write("    color: #fff!important;");
		document.write("}");
		document.write(".info {");
		document.write("    background: #666666!important;");
		document.write("}");
		document.writeln(".footWrapd{background:#666666;}");
		document.writeln(".foot *{color:#fff !important;}");
		document.writeln("</style>");
		if($("body").width()>768){
			$("body").css("background-position-y",$(".ershida").height());
			document.writeln("<style>");
			document.write("        body{");
			document.write("            background: url(https:\/\/www.miit.gov.cn\/cms_files\/filemanager\/1226211233\/picture\/20222\/a5d67fbde3544ec9974d5c86f521171c.jpg) no-repeat center top;");
			document.write("}");
			document.write(".top{");
			document.write("    background: bottom!important;");
			document.write("}");
			document.write(".waplog{");
			document.write("    display: none!important;");
			document.write("}");
			document.write(".pclog{");
			document.write("    display: block!important;");
			document.write("}");
			document.write(".top_t1 a.top_t11,.top_t2 p a,.top_b ul li a{");
			document.write("    color: #fff!important;");
			document.write("}");
			document.write(".head .h_right .hotword a{");
			document.write("    font-size: 14px;");
			document.write("}");
			document.write(".main h2 {");
			document.write("    font-size: 25px!important;");
			document.write("    line-height: normal!important;");
			document.write("}");
			document.write(".txt18 {");
			document.write("    font-size: 18px!important;");
			document.write("}");
			document.write(".bsfw .xzxk h3{");
			document.write("    line-height: 18px!important;");
			document.write("}");
			document.write(".cont_left ul li,.cont_right .gxdata ul li,.cont_right .gxdata ol li{");
			document.write("    font-size: 14px;");
			document.write("}");
			document.write(".cont_left .title{");
			document.write("    line-height: 1.5!important;");
			document.write("}");
			document.writeln("</style>");
			if(window.screen.availWidth<750){
				document.writeln("<style>.cont_left .title{font-size: inherit!important;}</style>");
			}
		}else{
		    document.writeln("<style>");
			document.write("    body{");
			document.write("        background: #fff!important;");
			document.write("    }");
			document.write(".pclog{");
			document.write("    display: none!important;");
			document.write("}");
			document.write(".waplog{");
			document.write("    display: block!important;");
			document.write("}");
			document.write(".head .logos{");
			document.write("    margin-top: 25px!important;");
			document.write("}");
			document.write("}");
			document.writeln(".footWrapd{background:#666666;}");
			document.writeln(".foot *{color:#fff !important;}");
			document.writeln("</style>");
		}

	//clearInterval(gxbCssTimeer);
	//clearInterval(gxbCssTimeer);
	//return false;
	};
}
setTimeout(addgxbCss(),30);