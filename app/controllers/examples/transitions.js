var args = arguments[0] || {};
var selectedIndex = 0;

function closeWin(evt){
	$.win.close();
}

//iOS only animation
function doClick() {

    if (selectedIndex%2 == 0) {
        $.container.animate({
            view:$.box1,
            transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
        });
    } else {
        $.container.animate({
            view:$.box2,
            transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
        });
    }
    selectedIndex++;
};
