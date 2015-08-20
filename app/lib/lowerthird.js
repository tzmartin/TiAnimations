
module.exports = function () {
    
var image1 = Ti.UI.createImageView({
    image:'logo.png',
    width:225
});

var image2 = Ti.UI.createImageView({
    image:'logo.title.png',
    left:-200,
    bottom:20,
    width:200   
});

var view = Ti.UI.createView({bottom:0});

view.add(image1);
view.add(image2);

view.addEventListener('click',function() {
  view.animate({bottom:-100,duration:400});
})

setTimeout(function() {
    image1.animate({transform:Ti.UI.create2DMatrix({rotate:-15}),bottom:0,width:80,left:-20,duration:800},function() {
        image2.animate({left:50,duration:300});
        view.applyProperties({height:100,bottom:0});
    });
},2000);

return view;

}();
