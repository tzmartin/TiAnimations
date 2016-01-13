// Modified from https://github.com/atsusy/Wheel-Gesture-Sample

var args = arguments[0] || {};

function closeWin(evt){
	$.win.close();
}

var wheelImage = Ti.UI.createImageView({
	image:'/images/wheel.png'
});

var angleLabel = Ti.UI.createLabel({
	text:'0',
	width:Ti.UI.SIZE,
	height:Ti.UI.SIZE,
	color:'#aaa',
	font:{ fontSize:48 }
});


var initialAngle = 0.0;
var currentAngle = 0.0;

wheelImage.addEventListener('touchstart', function(e){
  Ti.API.info(e);
  Ti.API.info(this.rect.width);
	initialAngle = Math.atan2(parseInt(e.x) - this.rect.width/2.0, -(parseInt(e.y) - this.rect.height/2.0));
	Ti.API.info(initialAngle);
});

wheelImage.addEventListener('touchmove', function(e){
	var movedAngle = Math.atan2(e.x - this.rect.width/2.0, -(e.y - this.rect.height/2.0));
	var deltaAngle = movedAngle - initialAngle;
	currentAngle += deltaAngle;
	if (currentAngle > 2.0 * Math.PI){
		currentAngle -= 2.0 * Math.PI;
	}
  	if (currentAngle < 0.0){
  		currentAngle += 2.0 * Math.PI;
  	}
  	wheelImage.transform = Ti.UI.create2DMatrix().rotate(currentAngle / Math.PI * 180.0);
  	angleLabel.text = parseInt(currentAngle / Math.PI * 180.0);
});

$.win.add(wheelImage);
$.win.add(angleLabel);
