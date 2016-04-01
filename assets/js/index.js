(function(argument) {
	function actionlink (argument) {
		return (document.querySelector&&document.querySelector(argument)||document.getElementsByClassName(argument)[0])
	}
	window.requestAnimationFrame 
	|| (window.requestAnimationFrame = window.webkitRequestAnimationFrame 
		|| window.mozRequestAnimationFrame 
		|| window.oRequestAnimationFrame 
		|| window.msRequestAnimationFrame 
		||function(callback, element) {
		    	return window.setTimeout(function() {
		       		return callback(+new Date());
		    }, 1000 / 60)
		});

	function scrolstep() { 
	 	var _y= scrollY;
	    scrollTo(0,_y-15);
	    if (_y > 0) {
	    	requestAnimationFrame(scrolstep);
	    }
	}
	actionlink('.back-top').onclick=scrolstep;
	actionlink('.site-bars').onclick=function(){
		var css="nav-show";
		var arr=document.body.className.split(' ');
		var index= arr.indexOf(css);
		if(index==-1){
			document.body.className=document.body.className+" "+css;
		}
		else{
			document.body.className=arr.slice(0,index).concat(arr.slice(index+1)).join(' ');
		}
	};
})();
