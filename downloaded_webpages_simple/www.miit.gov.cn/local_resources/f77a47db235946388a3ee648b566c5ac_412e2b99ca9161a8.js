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
document.writeln("<div class=\"nav\">");
document.writeln("    <div class=\"page-con nav-box nav-pc\">");
document.writeln("        <ul class=\"clear\">");
document.writeln("            <li class=\"home-a\"><p><a  class=\"homeAurl\"><img src=\"/cms_files/webmiit/tplobject/gxbsy/7c75257d15f44bcb9bf47d524cd9cb65/images/home_btn.png\" style=\"margin-top:10px;\" /></a></p></li>                                                      ");
document.writeln("            <li>");
document.writeln("                <p><a href=\"/\" class=\"syHome active\">首页</a></p>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("                <p><a href=\"/zzjg/index.html\">组织机构</a></p>");
//document.writeln("                <div class=\"xiala-con\">");
 //document.writeln("					<iframe width=\"1100\" height=\"323\" src=\"https://www.miit.gov.cn//wzpz/syxl/gxbxl/index.html\" frameborder=\"0\" scrolling=\"no\" id=\"ariac4pded7otrk\"></iframe>");
//document.writeln("                </div>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("                <p><a href=\"/xwfb/index.html\">新闻发布</a></p>");
//document.writeln("                <div class=\"xiala-con\">");
//document.writeln("					<iframe width=\"1100\" height=\"323\" src=\"https://www.miit.gov.cn/xbymdz/sy/xbdh/xwfb/index.html\" frameborder=\"0\" scrolling=\"no\" id=\"aria4hsk3foq6jw\"></iframe>");
//document.writeln("                </div>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("                <p><a href=\"/zwgk/index.html\">政务公开</a></p>");
//document.writeln("                <div class=\"xiala-con\">");
// document.writeln("                    <iframe width=\"1100\" height=\"323\" src=\"https://www.miit.gov.cn/xbymdz/sy/xbdh/zwgk/index.html\" scrolling=\"no\" frameborder=\"0\" id=\"aria55x0dwblnzk\"></iframe>");
//document.writeln("                </div>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("                <p><a href=\"https://ythzxfw.miit.gov.cn/index\" target=\"_blank\">政务服务</a></p>");
//document.writeln("                <div class=\"xiala-con\">");
//document.writeln("                    <iframe width=\"1100\" height=\"323\" src=\"https://www.miit.gov.cn//wzpz/syxl/zwfwxl/index.html\" scrolling=\"no\" frameborder=\"0\" id=\"aria48c9liv6xta\"></iframe>");
//document.writeln("                </div>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("                <p><a href=\"/hdjl/index.html\">互动交流</a></p>");
//document.writeln("                <div class=\"xiala-con\">");
//document.writeln("                    <iframe width=\"1100\" height=\"323\" src=\"https://www.miit.gov.cn/xbymdz/sy/xbdh/hdjl/index.html\" scrolling=\"no\" frameborder=\"0\" id=\"ariaigug9f80muo\"></iframe>");
//document.writeln("                </div>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("                <p><a href=\"/gxsj/index.html\">工信数据</a></p>");
//document.writeln("                <div class=\"xiala-con\">");
//document.writeln("                    <iframe width=\"1100\" height=\"323\" src=\"https://www.miit.gov.cn//wzpz/syxl/gxsjxl/index.html\" scrolling=\"no\" frameborder=\"0\" id=\"aria1ck5cd9xf3j\"></iframe>");
//document.writeln("                </div>");
document.writeln("            </li>");
document.writeln("        </ul>");
document.writeln("    </div>");
document.writeln("	");
document.writeln("	<div class=\"nav-mob\">");
document.writeln("		<p><a class=\"homeAurl\" href=\"/\">首页</a></p>");
document.writeln("		<p><a href=\"/zzjg/index.html\">机构</a></p>");
document.writeln("		<p><a href=\"/xwfb/index.html\">新闻</a></p>");
document.writeln("		<p><a href=\"/zwgk/index.html\">公开</a></p>");
document.writeln("		<p><a href=\"/hdjl/index.html\">互动</a></p>");
document.writeln("		<p><a href=\"https://ythzxfw.miit.gov.cn/index\" target=\"_blank\">服务</a></p>");
document.writeln("		<p><a href=\"/gxsj/index.html\">数据</a></p>");
document.writeln("	</div>");
document.writeln("</div>");
document.writeln("<style>");
document.writeln(".nav-box ul{padding-left: 50px !important;}");
document.writeln(".nav-box ul li.home-a p{width: 32px !important;height: 31px;}");
document.writeln(".nav-box ul li p a.homeAurl{padding: 0;cursor: default;}");
document.writeln(".tsy-ldjs .tpjj_con a img{height: 115px !important;width: 170px !important;}");
document.writeln("@media screen and (max-width: 768px) {.xxgk_wrapper .xxgk-wrap .page-con{width: 100% !important;}.xxgk_wrapper .xxgk-main{width:100%!important}}");
document.writeln("</style>");

//$(".nav-box ul li").hover(function(){
//  $(this).find(".xiala-con").show();
//},function(){
//  $(this).find(".xiala-con").hide();
//})