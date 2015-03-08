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
		
	};
	/**ad**/
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_109076080_8994641_30312366";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_109076080_8994641_30312366";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
})();