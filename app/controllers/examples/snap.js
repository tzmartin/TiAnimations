var args = arguments[0] || {};
var curX=0,curY=0;
var olt = Titanium.UI.create3DMatrix(), curX, curY;

// Create an Animator object using the window as the coordinate system
var animator = Ti.UI.iOS.createAnimator({referenceView: $.win});

// Snap to the top-left corner when the app starts
var snap = Ti.UI.iOS.createSnapBehavior({
    item: $.block,
    snapPoint: {x: 105, y: 105},
});

// Controller Functions
function closeWin(evt){
	$.win.close();
}

function doSnap(e){
    // Snap the block to the point of the click event
    snap.snapPoint = {x: e.x+20, y: e.y+30};
    snap.damping = Math.random();
}

function doOpen(e){
    // Start the animation when the window opens
    animator.startAnimator();
}

function doTouchStart(e) {
    animator.stopAnimator();
    curX = e.x;
    curY = e.y;
}
function doTouchMove(e) {
    Ti.API.info(e);
    var deltaX = e.x - curX, deltaY = e.y - curY;
    olt = olt.translate(deltaX, deltaY, 0);
    $.block.animate({
        transform : olt,
        duration : 100
    });
}
function doTouchEnd(e) {
  setTimeout(animator.startAnimator,400);
  snap.snapPoint = {x: e.x, y: e.y};
  snap.damping = Math.random();
}

animator.addBehavior(snap);
