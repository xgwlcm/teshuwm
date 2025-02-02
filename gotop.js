var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?ab716690e410aac6be9a429505ad5013";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


var scrolltotop={
setting:{
startline:100, //起始行
scrollto:0, //滚动到指定位置
scrollduration:400, //滚动过渡时间
fadeduration:[500,100] //淡出淡现消失
},
controlHTML:'<img src="gotop.png" class="gotop" />', //返回顶部按钮
controlattrs:{offsetx:30,offsety:80},//返回按钮固定位置
anchorkeyword:"#top",
state:{
isvisible:false,
shouldvisible:false
},scrollup:function(){
if(!this.cssfixedsupport){
this.$control.css({opacity:0});
}
var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);
if(typeof dest=="string"&&jQuery("#"+dest).length==1){
dest=jQuery("#"+dest).offset().top;
}else{
dest=0;
}
this.$body.animate({scrollTop:dest},this.setting.scrollduration);
},keepfixed:function(){
var $window=jQuery(window);
var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx;
var controly=$window.scrollTop()+$window.height()-this.$control.height()-this.controlattrs.offsety;
this.$control.css({left:controlx+"px",top:controly+"px"});
},togglecontrol:function(){
var scrolltop=jQuery(window).scrollTop();
if(!this.cssfixedsupport){
this.keepfixed();
}
this.state.shouldvisible=(scrolltop>=this.setting.startline)?true:false;
if(this.state.shouldvisible&&!this.state.isvisible){
this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]);
this.state.isvisible=true;
}else{
if(this.state.shouldvisible==false&&this.state.isvisible){
this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]);
this.state.isvisible=false;
}
}
},init:function(){
jQuery(document).ready(function($){
var mainobj=scrolltotop;
var iebrws=document.all;
mainobj.cssfixedsupport=!iebrws||iebrws&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest;
mainobj.$body=(window.opera)?(document.compatMode=="CSS1Compat"?$("html"):$("body")):$("html,body");
mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+"</div>").css({position:mainobj.cssfixedsupport?"fixed":"absolute",opacity:0,cursor:"pointer"}).attr({title:"返回顶部"}).click(function(){mainobj.scrollup();return false;}).appendTo("body");if(document.all&&!window.XMLHttpRequest&&mainobj.$control.text()!=""){mainobj.$control.css({width:mainobj.$control.width()});}mainobj.togglecontrol();
$('a[href="'+mainobj.anchorkeyword+'"]').click(function(){mainobj.scrollup();return false;});
$(window).bind("scroll resize",function(e){mainobj.togglecontrol();});
});
}
};
scrolltotop.init();