$(document).ready(function(){
	
	var deviceWidth = document.body.clientWidth; //获取屏幕宽度
	var fontZise = deviceWidth/10 + "px"; //根据屏幕宽度除以10，作为字体大小	
	$("html").css("font-size", fontZise);//设置html的字体大小
	
	var style9LiHeight = $(".style9 li").width()/2;
	$(".style9 li").css("height", style9LiHeight);
	
	var style10ImgLeftHeight = $(".style10 .imgLeft").width();
	$(".style10 .imgLeft").css("height", style10ImgLeftHeight);
	$(".style10 .imgRight img").css("height", style10ImgLeftHeight/2);
	
	var style11ImgHeight = $(".style11 li img").width();
	$(".style11 li img").css("height", style11ImgHeight);
	
	var style12Height = $(".style12 li img").width();
	$(".style12 li").css("height", style12Height);
	
	var style13ImgHeight = $(".style13 li img").width();
	$(".style13 li img").css("height", style13ImgHeight);
	
	var style14LiWidth = $(".style14 li").width();
	var style14ImgWidth = $(".style14 li img").width();
	$(".style14 .newsContent").css("width", style14LiWidth - style14ImgWidth);
	
	var style16ImgHeight = $(".style16 img").width()/2;
	$(".style16 img").css("height", style16ImgHeight);
	
	//控制图片尺寸
	var imgWidth = $(".productList .imgDivInner").css("width");
   	$(".imgDivInner,.imgBorder,.imgBorderInner").css("height",imgWidth);

	//控制"同店推荐"图片尺寸
	var tabPageWidth = $(".tab-page").width();
	$(".pro-list").css("width",tabPageWidth);
	$(".pro-list .imgDiv").css("width",tabPageWidth * 0.47);
	var imgDivOutWidth = $(".pro-list .imgDiv").width();
	$('.pro-list .imgDivOut').css("width",imgDivOutWidth);
   	$(".pro-list .imgDivInner,  .pro-list .imgBorder,  .pro-list .imgBorderInner").css("height",imgDivOutWidth);
	
	//重设窗口大小
	$(window).resize(function(){
		var deviceWidth = document.body.clientWidth; //获取屏幕宽度
		var fontZise = deviceWidth/10 + "px"; //根据屏幕宽度除以10，作为字体大小	
		$("html").css("font-size", fontZise);//设置html的字体大小
		
		var style9LiHeight = $(".style9 li").width()/2;
		$(".style9 li").css("height", style9LiHeight);
		
		var style10ImgLeftHeight = $(".style10 .imgLeft").width();
		$(".style10 .imgLeft").css("height", style10ImgLeftHeight);
		$(".style10 .imgRight img").css("height", style10ImgLeftHeight/2);
		
		var style11ImgHeight = $(".style11 li img").width();
		$(".style11 li img").css("height", style11ImgHeight);
		
		var style12Height = $(".style12 li img").width();
		$(".style12 li").css("height", style12Height);
		
		var style13ImgHeight = $(".style13 li img").width();
		$(".style13 li img").css("height", style13ImgHeight);
		
		var style14LiWidth = $(".style14 li").width();
		var style14ImgWidth = $(".style14 li img").width();
		$(".style14 .newsContent").css("width", style14LiWidth - style14ImgWidth);
		
		var style16ImgHeight = $(".style16 img").width()/2;
		$(".style16 img").css("height", style16ImgHeight);
		
		//控制图片尺寸
		var imgWidth = $(".imgDivInner").css("width");
	   	$(".imgDivInner,.imgBorder,.imgBorderInner").css("height",imgWidth);
	   	
   		//控制"同店推荐"图片尺寸
		var tabPageWidth = $(".tab-page").width();
		$(".pro-list").css("width",tabPageWidth);
		$(".pro-list .imgDiv").css("width",tabPageWidth * 0.47);
		var imgDivOutWidth = $(".pro-list .imgDiv").width();
		$('.pro-list .imgDivOut').css("width",imgDivOutWidth);
	   	$(".pro-list .imgDivInner,  .pro-list .imgBorder,  .pro-list .imgBorderInner").css("height",imgDivOutWidth);
	}); 
});
