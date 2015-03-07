(function(argument) {
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
	(document.querySelector&&document.querySelector('.back-top')||document.getElementsByClassName('back-top')[0]).onclick=scrolstep;
})();