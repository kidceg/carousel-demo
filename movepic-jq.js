$(document).ready(function(e) {

//获取整个大div
var $imageCarousel = $('#imageCarousel');
//获取图片集合
var $pic = $('#pic');
//获取小圆圈按钮的集合
var $btn_span = $('#buttons span');
//获取左箭头
var $pre = $('#pre');
//获取右箭头
var $next = $('#next');

//箭头点击触发然后pic改变左距离
function move(change) {
  //定义每次移动后的Left值，change为一张图片宽度
	var Left = parseInt(pic.offsetLeft) + change;
   //设置定时器让图片运动切换
    var speed = change/5;//每次移动的距离，分5次移动；
    run();
     //定时器
    function run () {
      if ( (speed > 0 && parseInt(pic.offsetLeft) < Left)
      	|| (speed < 0 && parseInt(pic.offsetLeft) > Left)) {
      //分5次改变left值，直到满足切换条件
       $pic.css('left', parseInt(pic.offsetLeft) + speed +'px');
      //超时定时器
       setTimeout(run,50);//每次运动间隔时间，所以切换一张图片运动时间为5*50=250毫秒
      } else {
        //切换图片
      	$pic.css('left',Left + 'px');
      	//当left变到不恰当范围的时候，把left变回范围内
    		if (Left > -900) {
    			$pic.css('left',-4500 + 'px');
    		}
    		if (Left < -4500) {
    			$pic.css('left',-900 + 'px');
    		}
  	  }
    }    
    
}

//默认第一个span加class='on'
$btn_span.eq(0).addClass('on');

//右箭头点击触发然后pic改变左距离
$next.on('click', function () {
	   move(-900);
     //一点击就先重置所有按钮的className
     $btn_span.removeClass('on');
    //计算第几个span按钮要加className
    var x = Math.floor(parseInt($pic.offset().left)/(-900)); 
    //当x等于4的时候是第五张图片点击向下一张，所以要跳回第一张图片对应的按钮；
    if (x == 4){
    return $btn_span.eq(0).addClass('on');
    }
    //如果x不是等于4
    $btn_span.eq(x+1).addClass('on');
});

//左箭头点击触发然后pic改变左距离
$pre.on('click', function () {
	 move(900);
  //一点击就先重置所有按钮的className
    $btn_span.removeClass('on');
  //计算第几个span按钮要加className
  var x = Math.floor(parseInt($pic.offset().left)/(-900));
  //当x等于0的时候是第1张图片向前点击，所以要跳回第5张图片对应的按钮；
  if (x == 0){
  return $btn_span.eq(4).addClass('on');
  }
  //如果x不是等于0
  $btn_span.eq(x-1).addClass('on');
});

//点击按钮会跳到对应按钮图片位置并按钮加上样式
$btn_span.on('click', function () {
	if($(this).className == 'on') {
		return;
	}
      var x =  Math.floor(parseInt($pic.offset().left)/(-900));
      var j = parseInt($(this).attr('id')[1]);
     //获取当前按钮是第几个按钮
      var a = -900 * (j - x - 1); //移动的距离      
      move(a);
      $btn_span.removeClass('on');
      $(this).addClass('on');
});
  
//声明变量，用来自动播放
var autorun;
//自动播放函数
function start() {
    autorun = setInterval(function () {
      $next.click();
    },2500);
}
//停止自动播放
function stop () {
  clearInterval(autorun);
}
//鼠标移到图片轮播区域就停止自动播放
$imageCarousel.on('mouseover',function () {
  stop();
});
//鼠标移出图片轮播区域就开始自动播放
$imageCarousel.on('mouseout',function () {
  start();
});
start();








})