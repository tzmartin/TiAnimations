var args = arguments[0] || {};

var WIDTH = Ti.Platform.displayCaps.platformWidth;

// Create an Animator object using the window as the coordinate system
var animator = Ti.UI.iOS.createAnimator({referenceView: $.win});

// Snap the red block so it does not move
var redSnap = Ti.UI.iOS.createSnapBehavior({
    snapPoint: {x: 75, y: 10},
    item: $.redBlock,
    damping: 0.0
});
// Snap the blue block so it does not move
var blueSnap = Ti.UI.iOS.createSnapBehavior({
    snapPoint: {x: WIDTH - 75, y: 10},
    item: $.blueBlock,
    damping: 0.0
});
// Anchor the green block to the red one when the app starts
var anchor = Ti.UI.iOS.createViewAttachmentBehavior({
    anchorItem: $.redBlock,
    item: $.greenBlock
});
// Simulate Earth's gravity to allow the green block to swing
var gravity = Ti.UI.iOS.createGravityBehavior({
    gravityDirection: {x: 0.0, y: 1.0}
});

function closeWin(evt){
	$.win.close();
}

// Controller functions
function doRedClick(e){
    // Change the anchor item
    anchor.anchorItem = $.redBlock;
}
function doBlueClick(e){
    // Change the anchor item
    anchor.anchorItem = $.blueBlock;
}
function doOpen(e){
    // Start the animation when the window opens
    animator.startAnimator();
}



// Add items
gravity.addItem($.greenBlock);

// Add behavior
animator.addBehavior(redSnap);
animator.addBehavior(blueSnap);
animator.addBehavior(anchor);
animator.addBehavior(gravity);
