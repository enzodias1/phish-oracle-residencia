/*访问站外链接地址*/
function inArray(sstr,sarry){
	var newnum = -1;
	for(var sdai=0;sdai<sarry.length;sdai++){
		if(sstr.indexOf(sarry[sdai]) > -1){
			newnum = sstr.indexOf(sarry[sdai]);
		}
	}
	return newnum;
}


function gotoLink(){
    if(event.preventDefault) {
		event.preventDefault();
	}else{
		event.returnValue = false;
	} 

	var newShref = event.currentTarget.href;
	//console.log(newShref); // 输出href值
	if(newShref.indexOf("/visit/link?url=") > -1){
		newShref = newShref.substring(newShref.indexOf("/visit/link?url=")+16,newShref.indexOf("&websiteid="))
	}
	
	//console.log(newShref); // 输出href值


	var gourl2 = newShref;
	if(gourl2){
		tmpurl = gourl2.indexOf('://') ==-1 ? gourl2 : gourl2.substring(gourl2.indexOf('://')+3);
		godomain = tmpurl.indexOf('/') != -1 ? tmpurl.substring(0,tmpurl.indexOf('/')) : tmpurl;
		godomain = godomain.indexOf(':') == -1 ? godomain : godomain.substring(0,godomain.indexOf(':'));
		var filterUrl = new Array('www.miit.gov.cn','.miit.gov.cn','ythzxfw.miit.gov.cn','javascript:void(0)','#','yhssglxt.miit.gov.cn',"bzxx.miit.gov.cn","wsxf.miit.gov.cn","www.gov.cn");
		if(gourl2.indexOf("http") > -1){
			if(inArray(godomain,filterUrl) == -1){
				var strlink = '<div id="moe_black"><div id="moe_golink"><p id="golink_close"><img src="/cms_files/filemanager/1226211233/picture/20247/3e7c60d6ef774b0f9ac4e4068db779a3.png" /></p><div id="golink_info">您访问的链接即将离开<br /><span>“中华人民共和国工业和信息化部”门户网站</span><br />是否继续？</div></div></div>';
				
				if (window.self != window.top) {
					//不是顶层窗口
					if($('#moe_black',window.top.document).size()>0) $('#moe_black',window.top.document).remove();

					$('body',window.top.document).append('<style type="text/css">' +
					'	#moe_black{display:none;position:absolute;top:0;left:0;z-index:999;width:100%;height:100%;background:rgba(0,0,0,0.5)}' + 
					'	#moe_black #moe_golink{display:none;position:fixed;z-index:1000;top:0;right:0;bottom:0;left:0;margin:auto;width:560px;height:230px;background:rgb(242,246,255);border-radius:10px;color:#4b4b4b;border:2px solid rgb(86,127,230)}' + 
					'	#moe_black #moe_golink p{text-align:right;margin-top:-30px}' + 
					'	#moe_black #moe_golink p img,' + 
					'	#moe_black #golink_btn strong{cursor:pointer;}' + 
					'	#moe_black #golink_info{margin:30px 30px 15px;padding-bottom:15px;border-bottom:1px solid #7994d7;font-size:24px;text-align:center;line-height:36px}' + 
					'	#moe_black #golink_info span{color:#054696;font-weight:bold;}' + 
					'	#moe_black #golink_btn{text-align:center;line-height:41px;font-size:18px}' + 
					'	#moe_black #golink_btn a{color:#fff;background:#054696;display:inline-block;padding:0 15px;border-radius:5px}' + 
					'	#moe_black #golink_btn strong{margin-left:50px;}' + 
					'	#moe_black #golink_info img,#golink_btn img{vertical-align:middle}' + 
					'</style>');


					$('body',window.top.document).append(strlink);
					var tm = $('#moe_black',window.top.document);
					var infoBox = $('#moe_golink',window.top.document);
					var closeBtn = $('#golink_close',window.top.document).find('img');
					//var infoTop = ($(window).height()-277)/2;
					var infostr = '<div id="golink_btn"><a href='+gourl2+' target="_blank">继续访问</a><strong>取消</strong></div>';
					tm.height($("html",window.top.document).height()).show();
					$(infoBox).append(infostr).show();
					var goBtn = $('#golink_btn',window.top.document);
					var goLink = goBtn.find('img');
					var CancelBtn = goBtn.find('strong');	
					var CancelBtnA = goBtn.find('a');
					goLink.click(function(){
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});		
					closeBtn.click(function(){
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});
					CancelBtn.click(function(){
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});
					CancelBtnA.click(function(){
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});

				} else {
					if($('#moe_black').size()>0) $('#moe_black').remove();

					$('body').append('<style type="text/css">' +
					'	#moe_black{display:none;position:absolute;top:0;left:0;z-index:999;width:100%;height:100%;background:rgba(0,0,0,0.5)}' + 
					'	#moe_black #moe_golink{display:none;position:fixed;z-index:1000;top:0;right:0;bottom:0;left:0;margin:auto;width:560px;height:230px;background:rgb(242,246,255);border-radius:10px;color:#4b4b4b;border:2px solid rgb(86,127,230)}' + 
					'	#moe_black #moe_golink p{text-align:right;margin-top:-30px}' + 
					'	#moe_black #moe_golink p img,' + 
					'	#moe_black #golink_btn strong{cursor:pointer;}' + 
					'	#moe_black #golink_info{margin:30px 30px 15px;padding-bottom:15px;border-bottom:1px solid #7994d7;font-size:24px;text-align:center;line-height:36px}' + 
					'	#moe_black #golink_info span{color:#054696;font-weight:bold;}' + 
					'	#moe_black #golink_btn{text-align:center;line-height:41px;font-size:18px}' + 
					'	#moe_black #golink_btn a{color:#fff;background:#054696;display:inline-block;padding:0 15px;border-radius:5px}' + 
					'	#moe_black #golink_btn strong{margin-left:50px;}' + 
					'	#moe_black #golink_info img,#golink_btn img{vertical-align:middle}' + 
					'</style>');

					$('body').append(strlink);
					var tm = $('#moe_black');
					var infoBox = $('#moe_golink');
					var closeBtn = $('#golink_close').find('img');
					//var infoTop = ($(window).height()-277)/2;
					var infostr = '<div id="golink_btn"><a href='+gourl2+' target="_blank">继续访问</a><strong>取消</strong></div>';
					tm.height($(document).height()).show();
					infoBox.append(infostr).show();
					var goBtn = $('#golink_btn');
					var goLink = goBtn.find('img');
					var CancelBtn = goBtn.find('strong');	
					var CancelBtnA = goBtn.find('a');	
					goLink.click(function(){
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});		
					closeBtn.click(function(){
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});
					CancelBtn.click(function(){
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});
					CancelBtnA.click(function(){
						goBtn.remove();
						infoBox.hide();
						tm.hide();
					});

				}

			}else{
				if(event.currentTarget.getAttribute('target') == "_blank"){
					// window.open(gourl2, '_blank');
				}else{
					window.location.href = gourl2;
				}
			}
		}else{
			if(event.currentTarget.getAttribute('target') == "_blank"){
				window.open(gourl2, '_blank');
			}else{
				window.location.href = gourl2;
			}
		}
	}
}