//新版页面?newpage=true  或 &newpage=true 
//URL参数值获取getQueryString
function getQueryString(name) {
       var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
       var r = window.location.search.substr(1).match(reg);
       if(r != null) {
             return decodeURIComponent(r[2]);
       }
       return '';
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


document.writeln("<link href=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/public_base.css\" rel=\"stylesheet\" />");
document.writeln("<link href=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/0New_tylmy.css\" rel=\"stylesheet\" />");

//新版页面
document.writeln("<div class=\"top clear\">");
document.writeln("	<div class=\"page-con\">");
document.writeln("		<div class=\"top-l\">");
document.writeln("			<a class=\"homeAurl\" href=\"/\"><img src=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/logo_gh.png\" id=\"gh\" /><img src=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/logo_name.png\" id=\"logo_name\" /></a>");
document.writeln("		</div>");
document.writeln("		<div class=\"top-r\">");
document.writeln("			<div class=\"top-rt bt-size-14\">");
document.writeln("				<a href=\"https://bzxx.miit.gov.cn/qa/znzx/main\" target=\"_blank\"><img src=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/top_img01.png\" />阳光小信</a>");
document.writeln("				<a onclick=\"top.aria.start()\">无障碍</a>");
document.writeln("				<a href=\"https://www.miit.gov.cn/ydbwz/art/2020/art_c3d16f610b584f5ab12295fd14af73e2.html\" target=\"_blank\">手机端</a>");
document.writeln("				<a href=\"https://mail.miit.gov.cn/\" target=\"_blank\">邮箱</a>");
document.writeln("				<a>微信");
document.writeln("					<div>");
document.writeln("						<img src=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/wx_ewm.png\" />");
document.writeln("					</div>");
document.writeln("				</a>");
document.writeln("				<a href=\"http://weibo.com/miit\" target=\"_blank\">微博</a>");
document.writeln("				<a href=\"https://www.miit.gov.cn/RRSdy/index.html\" target=\"_blank\">RSS订阅</a>");
document.writeln("			</div>");
document.writeln("			<div class=\"top-rb\">");
document.writeln("				<div class=\"search-form clear\">");
document.writeln("					<input class=\"search-form-txt bt-size-16\" type=\"value\" placeholder=\"请输入关键字\" />");
document.writeln("					<input class=\"search-form-btn\" onclick=\"searchWord()\" type=\"button\" />");
document.writeln("				</div>");
document.writeln("			</div>");
document.writeln("		</div>");
document.writeln("	</div>");
document.writeln("</div>");
document.writeln("");

document.writeln("<style>");
document.writeln(".sy-wrapper{min-width:1400px;}");
document.writeln(".newpage-wrapper .page-con{width:1280px;margin:0 auto;}");
document.writeln(".clear::after{content:\"\";display:block;clear:both;float:none;}");
document.writeln("");
document.writeln("/* 首页头部 */");
document.writeln(".top{padding:0 !important;margin:0 !important}");
document.writeln(".top *{margin:0;padding:0;box-sizing:border-box;outline:0;font-family: \"Microsoft YaHei\";}");
document.writeln(".top ul,.top li{list-style:none;}");
document.writeln(".top img{border:0;}");
document.writeln(".top table{border-collapse:collapse;}");
document.writeln(".top a{text-decoration:none;color:#000;}");
document.writeln(".top .top-l{padding: 42px 0;float:left;}");
document.writeln(".top .top-l img{display:inline !important;}");
document.writeln(".top .top-l img#gh{height: 65px;margin-right: 15px;}");
document.writeln(".top .top-l img#logo_name{height: 56px;margin-top: 7px;}");
document.writeln(".top .top-r{float:right;padding-top: 35px;width:410px;}");
document.writeln(".top .top-rt a{color:#000;float:left;margin-left: 15px;line-height:26px;position:relative;display:inline-block;vertical-align: top;display: flex;align-items: center;}");
document.writeln(".top .top-rt a img{padding-right:6px;}");
document.writeln(".top .top-rt a div{position:absolute;top:100%;z-index: 99;left:50%;margin-left:-66px;display:none;}");
document.writeln(".top .top-rt a div img{padding-right:0;}");
document.writeln(".top .top-rt a:hover div{display:block;}");
document.writeln(".top .top-rb{float:right;margin-top:10px;}");
document.writeln(".top .search-form{border:1px solid #e5e5e5;overflow: hidden;}");
document.writeln(".top .search-form-txt{width:354px;border:0;height:23px;float:left;padding:0 10px;margin-top:10px;color:#aaaaaa;box-sizing: border-box !important;}");
document.writeln(".top .search-form-btn{width:38px !important;height:38px !important;background:url(/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/top_img02.png) no-repeat 50% 50% #054696 !important;border:2px solid #fff !important;float:left !important;box-sizing:content-box !important;cursor: pointer !important;}");
document.writeln(".top .top-rt a:hover{color:#054696;}");
document.writeln("</style>");


function searchWord(){
  if($(".search-form-txt").val().trim() == ""){
    alert("请输入关键词！")
  }else{
    var newSearchUrl = 'https://www.miit.gov.cn/search/index.html?websiteid=110000000000000&pg=&p=&tpl=&category=&jsflIndexSeleted=&q=';
    newSearchUrl += $(".search-form-txt").val();
    window.open(newSearchUrl);
  }
	
}
$(function(){
  $('.search-form-txt').keypress(function(event) {
    if (event.which == 13) { // 13 是回车键的键码（KeyCode）
      searchWord();
    }
  });
})

