// 请求地址
var url = "https://pvcj.miit.gov.cn:5001/api/mis/addpv";
// 请求参数
//  必填项 ： name ：业务名称 accessTime ：当前时间格式 2017-12-12 01:02:50    visitType ： 1 代表互联网  2 代表政务外网  code为业务编号  userName userId 用户信息
// 非必填项 ：maxComplicationNum  并发量
var params = {
    name:"网站集约化平台",
    accessTime:getNowDate(),
    code:2,
    visitType :1,
    userId:'',
    userName:'',
    maxComplicationNum:10
}
// 执行请求方法
postAjax({
    url:url,
    data: params,
    success: function() {
        console.log('访问成功')
    }   
});

// 原生ajax请求封装
function postAjax(obj) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                obj.success();
            }
        }
    };
    xhr.open('POST', obj.url, true);　　　// 如果后台接收的是json格式数据，需要这样设置请求头
　　xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(obj.data));
  }
// 获取当前时间字符串
function getNowDate() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth();
    m += 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? '0' + d : d;
    var h = date.getHours();
    h = h < 10 ? '0' + h : h;
    var M = date.getMinutes();
    M = M < 10 ? '0' + M : M;
    var s = date.getSeconds();
    s = s < 10 ? '0' + s : s;
    var str = y + '-' + m + '-' + d + ' ' + h + ":" + M + ":" + s;
    return str
}
