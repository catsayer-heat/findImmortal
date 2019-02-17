//轮播图1
ScrollImg({
	scroll:'.scroll',//传入的轮播图
	direction:'right',//方向默认向右
	time:3000,//时间默认3s
	//默认的导航点 <ul><li class="dot"></li></ul>  选中的id='dot'
});
//轮播图1
ScrollImg({
	scroll:'.scroll_2',//传入的轮播图
	direction:'left',//方向默认向右
	time:3000,//时间默认3s
	//默认的导航点 <ul><li class="dot"></li></ul>  选中的id='dot'
});
//右侧安全边侧栏 和 微信
!function(){
	$('#safe').click(function(e) {
		e.stopPropagation();//阻止事件冒泡
		$('.side-safe').fadeIn();
	});
	$('body').click(function(){
		$('.side-safe').fadeOut();
	});
}();
//选项卡1
!function(){
	$('.l-nav').mouseover(function() {
		$('a.l-nav').siblings('.l-nav').attr('class','l-nav').eq($(this).index()).attr('class','l-nav underline-a');
		$('.new-show ul').siblings().removeAttr('id').eq($(this).index()).attr('id','show');
	});
}();
//人物选择
!function(){
	$('.hero').mouseover(function() {
		//更改选中的背景色
		$('.hero').siblings().attr('class','hero').eq($(this).index()).attr('class','hero opt-hero');
		
		//字体粗细
		$('.a-hero').each(function() {
			$(this).attr('class','a-hero');
		});
		$('.a-hero').eq($(this).index()).attr('class','a-hero hero-s');

		//人物职业显示
		$('.affix').each(function(){
			$(this).attr('class','affix');
		});
		$('.affix').eq($(this).index()).attr('class','affix show-hero');

		//人物职业指向
		$('.icon_dec').each(function(){
			$(this).attr('class','icon-caret-left icon_dec');
		});
		$('.icon_dec').eq($(this).index()).attr('class','icon-caret-left icon_dec dec-show');

		//英雄图片出现
		$('.c-box-l img').each(function() {
			$(this).attr('class','img-hero');
		});
		$('.c-box-l img').eq($(this).index()).attr('class','img-hero hero_show');
	});
}();
