window.onload = function () {

//获取整个大div
var imageCarousel = document.getElementById('imageCarousel');

//获取图片集合
var pic = document.getElementById('pic');

//获取左箭头
var pre = document.getElementById('pre');

//获取右箭头
var next = document.getElementById('next');

//右箭头点击触发然后pic改变左距离
// next.addEventpicener('click', function () {
// 	pic.style.left = parseInt(pic.offsetLeft) - 900 + 'px';
// });
//左箭头点击触发然后pic改变左距离
// pre.addEventpicener('click', function () {
// 	pic.style.left = parseInt(pic.offsetLeft) + 900 + 'px';
// });

//封装箭头点击触发然后pic改变左距离
function move(change) {
	var Left = parseInt(pic.offsetLeft) + change;
	
    //设置定时器让图片运动切换
    var speed = change/5;//每次移动的距离，5次；
    run();
    function run () {
      if ( (speed > 0 && Left > parseInt(pic.offsetLeft))
      	|| (speed < 0 && Left < parseInt(pic.offsetLeft))) {
       pic.style['left'] = parseInt(pic.offsetLeft) + speed +'px';
       setTimeout(run,50);//每次运动间隔时间
      } else {
      	pic.style['left'] = Left + 'px';
      		//当left变到不恰当范围的时候，把left变回范围内
    		if (Left > -900) {
    			pic.style['left'] = -4500 + 'px';
    		}
    		if (Left < -4500) {
    			pic.style['left'] = -900 + 'px';
    		}
  	  }
    }    
    
}
//右箭头点击触发然后pic改变左距离
next.addEventListener('click', function () {
	move(-900);

});
//左箭头点击触发然后pic改变左距离
pre.addEventListener('click', function () {
	move(900);
});




















































}