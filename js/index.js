$(function(){
	var swiper = new Swiper('#noticeIndex', {
		mode : 'vertical',
		autoplay : 3300,
		loop: true
	});
	//首页基金产品切换
	$(".tabTitle p").click(function(){
		var con=$(this).parent(".tabTitle").attr('cID');
		var indexs=$(this).index();
		$(this).addClass("cur").siblings("p").removeClass("cur");	
		$(con).find(".tabChild").eq(indexs).show().siblings(".tabChild").hide();
	})
	$(".tableFund").each(function(){
		$(this).find("tr").eq(1).find("td").css("border-top","0")
	})
	//
	$(".nav li").hover(function(){
	   $(this).find("ul:first").show();
	},function(){
	   $(this).find("ul:first").hide();
	})
})
