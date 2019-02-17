//轮播图 淡入淡出
/*
	默认配置
	ScrollImg({
		scroll:'#scroll',//传入的轮播图
		left_dot:'#left', //向左点击
		right_dot:'#right', //向右点击
		direction:'right',//方向默认向右
		time:3000,//时间默认3s
		//默认的导航点 <ul><li class="dot"></li></ul>  选中的class='dot-opt'
	});

 */
(function($){
	var ScrollImg = function(options){
		this.opts = $.extend({}, ScrollImg.DEFAULTS, options);
		//将options内操作
		var scroll = this.opts.scroll,
			left = this.opts.left_dot,
			right = this.opts.right_dot,
			direction = this.opts.direction,
			time = this.opts.time;
		//获取轮播图个数 即图片数
		var number = $(scroll+' ul li img').length;
		var count = 0;

		//创建dot导航点及其默认样式  
		!function(){
			//检测是否已经创建style样式
			$('style').length>0?console.log(1):$('head').append('<style></style>');
			$('style').append(".dot{margin:5px;display:inline-block;width:10px;height:10px;background-color:white;border-radius:5px;}"+
				'.dot:hover{cursor:pointer;}');
			for(i = 0;i<number;i++){
				$(scroll+' ul').eq(1).append('<li class="dot"></li>');
			}	
			$(scroll+' .dot').eq(0).attr('class','dot dot-opt');	
		}();

		var timer = setInterval(init, time);
		//鼠标放入移开 移除添加效果
		$(scroll).hover(function() {
			clearInterval(timer);
		}, function() {
			timer = setInterval(init, time);
		});

		//运行
		function init(){
			//进行方向判断
			direction == 'right' ? count++ : count--;
			if(count == number){count=0;}else if(count == -1){count = number-1}
			//淡入淡出效果		
			$(scroll+' ul').eq(0).children().siblings().hide().eq(count).fadeIn(1000);
			$(scroll+' .dot').siblings().attr('class','dot').eq(count).attr('class','dot dot-opt');

			//console.log(1); 
		}
		//点 的点击事件
		$(scroll+' .dot').click(function(){
			count = $(this).index();
			$(scroll+' ul').eq(0).children().siblings().hide().eq($(this).index()).fadeIn(1000);
			$(scroll+' .dot').siblings().attr('class','dot').eq(count).attr('class','dot dot-opt');
		});
		//向右 +
		$(right).click(function(){
			if(++count == number) count=0;
			$(scroll+' ul').eq(0).children().siblings().hide().eq(count).fadeIn(1500);
			$(scroll+' .dot').siblings().attr('class','dot').eq(count).attr('class','dot dot-opt');
		});
		//向左 -
		$(left).click(function(){
			if(--count == -1) count=number-1;
			$(scroll+' ul').eq(0).children().siblings().hide().eq(count).fadeIn(1500);
			$(scroll+' .dot').siblings().attr('class','dot').eq(count).attr('class','dot dot-opt');
		});
	}

	//默认配置
	ScrollImg.DEFAULTS = {
		scroll:'#scroll',//传入的轮播图
		left_dot:'#left', //向左点击
		right_dot:'#right', //向右点击
		direction:'right',//方向默认向右
		time:3000,//时间默认3s
		//默认的导航点 <ul><li class="dot"></li></ul>.dot  选中的class='dot-opt'
	};
	window.ScrollImg = ScrollImg;
}(jQuery))