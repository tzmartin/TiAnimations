var args = arguments[0] || {};

function closeWin(evt){
	$.win.close();
}

function doAnimate() {
  $.logo.animate(a1); // set the animation in motion
  setTimeout(function(){
    $.logo.animate(a2);
  },1200);
}

var m3d1 = Ti.UI.create3DMatrix();

// In next statement, the first arg is in degrees and the next three define an xyz vector describing the transformation
m3d1 = m3d1.rotate(180, 1, 1, 0);
m3d1 = m3d1.scale(2, 2, 2); // scale factor in the xyz axes
var a1 = Ti.UI.createAnimation({
    curve:Ti.UI.ANIMATION_CURVE_EASE_OUT,
    transform: m3d1,
    duration: 800
});

m3d1 = m3d1.rotate(-180, 0, 0, 1);
var a2 = Ti.UI.createAnimation({
    transform: m3d1,
    curve:Ti.UI.ANIMATION_CURVE_EASE_IN,
    duration: 800
});
