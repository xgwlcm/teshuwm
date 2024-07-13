$(function(){
			var code= ["\u1701","\u1702","\u1703","\u1704","\u1705","\u1706","\u1707","\u1708","\u1709","\u170a","\u170b","\u170c","\u170d","\u170e","\u170f","\u1710","\u1711","\u1712","\u1713","\u1714","\u1715","\u1717","\u1718","\u1719","\u171a","\u171b","\u171c","\u171d","\u171e","\u171f","\u1716","\u2000","\u2001","\u2002","\u2003","\u2004","\u2005","\u2006","\u2007","\u2008","\u2009","\u200a","\u200b","\u2430","\u2431","\u2432","\u2433","\u2434","\u2435","\u2436","\u2437","\u2438","\u2439","\u243a","\u243b","\u243c","\u243d","\u243e","\u243f","\u244f","\u2450","\u2451","\u2452","\u2453","\u2454","\u2455","\u2456","\u2457","\u2458","\u2459","\u245a","\u245b","\u245c","\u245d","\u245e","\u245f","\u2060","\u2061","\u2062","\u2063","\u2064","\u2065","\u206a","\u206b","\u206c","\u206d","\u206e","\u206f","\ufff0","\ufff1","\ufff2","\ufff3","\ufff4","\ufff5","\ufff6","\ufff7","\ufff8","\ufff9"];
			var qwe= document.getElementById("wm").value;
			var d =2;
			var q= $(".q");
			var text =$("#text");
		
			
			text.on("input",function(){
				$("#count").text("现在："+calc($(this).val()));
			})
			
			var scq = '<div class="item"><input class="field-long" value="';
			var sch = '" type="text" autocomplete="off" id="fuhao" class="el-input__inner"></div>';
			$("#btn").click(btnfun);
			
			function btnfun(){
				var value = text.val();
				var con =  calc(value);
				var count = Math.floor((60-con)/2);
				if(qwe == ""){
					alert("请选中要生成的模板")
				}else{
					if(value == "" && qwe != "kb" && qwe != "kba" ){
						alert("请输入你准备生成的名字!")
					}else{
						if(con>=60){
							alert("很抱歉，您最多只能输入30个汉字");
							return;
						}
						
						switch(qwe){
							case "kba":
								var ht= "";
								for (var j = 0;j<10;j++) {
									var str="";
									for(var i = 0;i<randomNum(2,6);i++){
										var sj = randomNum(0,code.length-1);
										str += code[sj];
									}
									ht+= scq+str+sch;
								}
								q.html(ht);
								break;
							case "kbd":
								var ht= "";
								for (var j = 0;j<10;j++) {
									var str="";
									for(var i = 0;i<6;i++){
										var sj = randomNum(0,code.length-1);
										str += code[sj];
									}
									ht+= scq+str+sch;
								}
								q.html(ht);
								break;
							case "dsz":
								var ht = "";
								// 放前面 的  4 个
								for (var j =0;j<4;j++) {
									var str = "";
									for (var i =0;i<count;i++) {
										var sj = randomNum(0,code.length-1);
										str += code[sj];
									}
									ht += scq+value+str+sch;
								}
								// 放后面的 
								for (var j =0;j<4;j++) {
									var str = "";
									for (var i =0;i<count;i++) {
										var sj = randomNum(0,code.length-1);
										str += code[sj];
									}
									ht += scq+str+value+sch;
								}
								// 中间的
								for (var j =0;j<4;j++) {
									var str = "";
									for (var i =0;i<count;i++) {
										var sj = randomNum(0,code.length-1);
										str += code[sj];
									}
									ht += scq+insertStr(value,value.length/2,str)+sch;
								}		
								
									var str = value;
										for (var i = 0; i<value.length;i++) {
											str = insertStr(str,randomNum(0,value.length-1),code[randomNum(0,code.length-1)]);
										}
									ht+=scq+str+sch;
								q.html(ht);
								break;
							case "ty":
									sc("҉");
								break;
							case "sc":
									 sc("̶");
								break;
								case "lx":
									 sc("⃟");
								break;
						
							case "ht":
								 sc_ht("ั͡");
								
								break;	
						
								break;	
							case "fn":
								sc("ོ");
								break;		
							case "sb":
								sc("͜");
								break;	
							case "xh":
								sc_xh("꯭");
								break;		
							case "sh":
								sc_sh("̄");
								break;	
							case "htw":
								sc("͟͞");
								break;	
							case "kb":
								sc("　");
								break;	
							case "lh":
								sc("҈");
								break;	
										
														
						}
					}
				}
			}
	$("#btna").click(function(){
		window.open("ts.html"); 
	})
			
			//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}
function insertStr(soure, start, newStr){   
	return soure.substring(0,start)+newStr+soure.substring(start)
}


$("body").on("click",".fz",function(e)
{
$(this).siblings(".srk").select();
document.execCommand("Copy"); // 执行浏览器复制命令
alert("已复制好，可贴粘。");
});



   
   function calc(a){
    var b=0;
    for(var i=a.length;i-->0;){
        if(a[i].charCodeAt()>255){
            b+=2;
        }else{
           b++;
        }
    }
    return b;
}
   
   
   
   function sc(codex){
   	var q= $(".q");
   					var value = text.val();
				var con =  calc(value);
				var count = Math.floor((60-con)/2);
   									var html = "";
									if(con<=60){
										var str = "";
										for (var i = 0; i<value.length;i++) {
												str += value[i] + codex;
										}
										
										
									}
										
										html+=scq+str+sch;
										
										
								q.html(html);
   }
      function sc_xh(codex){
		  var left_ht="꯭";
   	var q= $(".q");
   					var value = text.val();
				var con =  calc(value);
				var count = Math.floor((60-con)/2);
   									var html = "";
									if(con<=60){
										var str = "";
										for (var i = 0; i<value.length;i++) {
												str += value[i] + codex;
										}
										
										
									}
										
										html+=scq+left_ht+str+sch;
										
										
								q.html(html);
   }
    function sc_sh(codex){
		  var left_ht="̄";
   	var q= $(".q");
   					var value = text.val();
				var con =  calc(value);
				var count = Math.floor((60-con)/2);
   									var html = "";
									if(con<=60){
										var str = "";
										for (var i = 0; i<value.length;i++) {
												str += value[i] + codex;
										}
										
										
									}
										
										html+=scq+left_ht+str+sch;
										
										
								q.html(html);
   }
    function sc_ht(codex){
		var left_ht="ζั͡";
		var right_ht="✾";
   	var q= $(".q");
   					var value = text.val();
				var con =  calc(value);
				var count = Math.floor((60-con)/2);
   									var html = "";
									if(con<=60){
										var str = "";
										for (var i = 0; i<value.length;i++) {
												str += value[i] + codex;
										}
										
										
									}
										
										html+=scq+left_ht+str+right_ht+sch;
										
										
								q.html(html);
   }
})