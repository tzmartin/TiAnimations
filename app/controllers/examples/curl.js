var args = arguments[0] || {};
var selectedIndex = 0;

//iOS only animation
function doClick() {

    if (selectedIndex%2 == 0) {
        $.container.animate({
            view:$.box1,
            transition:Ti.UI.iPhone.AnimationStyle.CURL_UP
        });
    } else {
        $.container.animate({
            view:$.box2,
            transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN
        });
    }
    selectedIndex++;
};