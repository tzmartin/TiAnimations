// https://gist.github.com/FokkeZB/5434416

var state = 0;
var degrees = 0;

function closeWin(evt){
	$.win.close();
}

function Spinner(view, _speed) {
    var speed = _speed || 500,
        timeout,
        spinning = false;

    var self = this;

    function rotate() {
        var t = Ti.UI.create2DMatrix();
        degrees = degrees + speed;
        t = t.rotate(degrees);

        var a = Titanium.UI.createAnimation();
        a.transform = t;
        a.duration = 20;

        view.animate(a);

        loop();
    }

    function loop() {

        if (spinning === true) {
            timeout = setTimeout(rotate, 20);
        }

    }

    this.stop = function () {

        if (spinning === true) {
            spinning = false;
            timeout && clearTimeout(timeout);
        }

        return this;
    }

    this.start = function (_speed) {

        if (spinning === false || (_speed && _speed != speed)) {

            if (_speed) {
                speed = _speed;
                this.stop();
            }

            spinning = true;
            loop();
        }

        return this;
    }

    return this;
}

exports.Spinner = Spinner;



var s = new Spinner(
  $.spinner, // View to spin
  50 // Degrees to spin per millisecond
);

Ti.Gesture.addEventListener('orientationchange',function(e) {
  // Ti.API.info(Ti.Platform.displayCaps.platformHeight);
  // $.spinner.applyProperties({
  //   top:(e.source.isPortrait()) ? 47 : 70,
  //   width:(e.source.isPortrait()) ? 400 : Ti.Platform.displayCaps.platformHeight,
  //   height:(e.source.isPortrait()) ? 400 : 800
  // });
});

// Start
function doAnimate() {
  if (state%2 == 0) {
    s.start(20);
  } else {
    s.stop();
  }
  state++;
}

function doChange(e) {
  // Change speed
  //s.start(e.value);
}
