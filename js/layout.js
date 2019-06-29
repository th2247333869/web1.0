
//=====================
//	1. 8分块 布局横向4块纵向2块
//	2. 9分块 布局横三竖三
//	目前仅支持  4  9 16 分块
//=====================
var url = "";
//设置布局样式
function setLayout(argument) {
	// body...
	var layoutStyle = "width: 25%;height: 50%;";//默认8分块

	var htmltext = "";
	//计算布局
	if(argument!=null && argument!="" && argument!=0 &&argument!="0"){
		argument = parseFloat(argument);

		var result = calLayout(argument);

		layoutStyle = "width:"+result.width+"%;"+"height:"+result.height+"%;";
	}
	for(var i=0,length = result.size;i<length;i++){
		htmltext += '<div class="tool-bar" style="'+layoutStyle+'">'+
					'<object style="border:1px solid black;border-radius:25px; margin-top:2%;" '+
					' type="text/x-scriptlet" data="pages/layout'+(i+1)+'.html" width=90% height=90%></object>'+
					'</div>';
	}
	//根据argument分割整个容器 决定布局样式
	$(".menu-left").html(htmltext);
}

//计算布局效果
function calLayout(argument){
	var layoutFour = {
		width:100/2,
		height:100/2,
		size:4
	}

	var layoutNine = {
		width:100/3,
		height:100/3,
		size:9
	}

	var layoutSIX = {
		width:100/4,
		height:100/4,
		size:16
	}

	if(argument == 4){
		return layoutFour;
	}
	else if(argument == 9){
		return layoutNine;
	}
	else{
		return layoutSIX;
	}
}

