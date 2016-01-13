var args = arguments[0] || {};

function closeWin(evt){
	$.win.close();
}

function doClick() {
    $.box1.animate({
        opacity:0,
        duration:1000,
        autoreverse:true
    },function() {
        if ($.box) {
            $.box.opacity = 1;
        }
    });
}
