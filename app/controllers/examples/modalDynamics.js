var args = arguments[0] || {};

// Create an Animator object using the window as the coordinate system
var animator = Ti.UI.iOS.createAnimator({referenceView: $.win});

// Snap to the center when the app starts
var snap0 = Ti.UI.iOS.createSnapBehavior({
  item: $.modal,
  snapPoint: {x: Ti.Platform.displayCaps.platformWidth/2, y: -Ti.Platform.displayCaps.platformHeight},
});
var snap1 = Ti.UI.iOS.createSnapBehavior({
  item: $.modal,
  snapPoint: {x: Ti.Platform.displayCaps.platformWidth/2, y: Ti.Platform.displayCaps.platformHeight/2-65},
});

// Simulate Earth's gravity
var gravity = Ti.UI.iOS.createGravityBehavior({
  gravityDirection: {x: 0, y: 1.2}
});

var dynamicObj = Ti.UI.iOS.createDynamicItemBehavior({
  density: 20.0,
  angularResistance: 1.0,
  friction: 1.0,
  resistance: 1.0,
  allowsRotation: true
});

function closeWin(evt){
	$.win.close();
}

function doOpen() {
  animator.addBehavior(snap0);
  animator.startAnimator();
}
function doShowAlert(e){
  // Start the animation when the window opens
  animator.removeBehavior(snap0);
  animator.addBehavior(snap1);
}
function doDismissAlert(e){

  dynamicObj.addAngularVelocityForItem($.modal,1);
  animator.removeBehavior(snap1);

  setTimeout(function() {
    animator.addBehavior(snap0);
  },2000);
}

gravity.addItem($.modal);
dynamicObj.addItem($.modal);

animator.addBehavior(dynamicObj);
animator.addBehavior(gravity);
