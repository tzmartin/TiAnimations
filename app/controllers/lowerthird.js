
function hideView() {
  $.view.animate({
    bottom:-100,
    duration:400
  });
}


setTimeout(function() {

    $.logo.animate({
      transform:Ti.UI.create2DMatrix({rotate:-15,scale:0.6}),
      bottom:-5,
      left:-40,
      duration:800
    },function() {

        $.title.animate({
          left:60,
          duration:300
        });

        // Reset view
        $.view.applyProperties({
          height:100,
          bottom:0
        });
    });

},2000);
