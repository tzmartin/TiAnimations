var args = arguments[0] || {};

function closeWin(evt){
	$.win.close();
}

// Listen for collisions
function report(e) {
    Ti.API.info(JSON.stringify(e.type));
};

// Create an Animator object using the window as the coordinate system
var animator = Ti.UI.iOS.createAnimator({referenceView: $.win});

// Create a default collision behavior, using the window edges as boundaries
var collision = Ti.UI.iOS.createCollisionBehavior();


collision.addEventListener('itemcollision', report);
collision.addEventListener('boundarycollision', report);

// Simulate Earth's gravity
var gravity = Ti.UI.iOS.createGravityBehavior({
    gravityDirection: {x: 0.0, y: 1.0}
});

var WIDTH = Ti.Platform.displayCaps.platformWidth;
var HEIGHT = Ti.Platform.displayCaps.platformHeight;

// Create a bunch of random blocks; add to the window and behaviors
var blocks = [];
for (var i = 0; i < 25; i++) {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    var rgb = 'rgb(' + r +"," + g + "," + b + ")";

    blocks[i] = Ti.UI.createView({
        width: 25,
        height: 25,
        top: Math.round(Math.random() * (HEIGHT / 4) + 25),
        left: Math.round(Math.random() * (WIDTH - 25) + 25),
        backgroundColor: rgb
    });
    $.win.add(blocks[i]);
    collision.addItem(blocks[i]);
    gravity.addItem(blocks[i]);
}

animator.addBehavior(collision);
animator.addBehavior(gravity);

// Start the animation when the window opens
$.win.addEventListener('open', function(e){
    animator.startAnimator();
});
