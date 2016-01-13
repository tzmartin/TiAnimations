var args = arguments[0] || {};

var hash = _.extend({},$.box2);

function closeWin(evt){
	$.win.close();
}

function doClick() {
    $.box2.animate({
        top:6,
        left:8,
        curve:Ti.UI.ANIMATION_CURVE_LINEAR,
        duration:400
    },function() {
        $.box2.animate({top:10,left:12,curve:Ti.UI.ANIMATION_CURVE_EASE_IN,duration:200});
    });
}

function doHide() {
    $.box2.animate(_.extend(hash,{curve:Ti.UI.ANIMATION_CURVE_EASE_IN,duration:800}));
}
