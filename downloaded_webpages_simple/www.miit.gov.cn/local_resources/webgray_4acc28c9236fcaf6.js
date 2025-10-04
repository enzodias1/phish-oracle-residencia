$(function(){
var starttime= -1;
var endtime = -1;
var ontime = new Date();
var onTime = new Date(new Date(ontime).toLocaleDateString()).getTime();
if(onTime >= starttime && onTime < endtime){
  $("body").css("filter","grayscale(1)");
  $("body").css("-webkit-filter","grayscale(100%)");
  $("body").css("filter","gray");
}
})