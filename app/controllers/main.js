var args = arguments[0] || {};

function doClick(e) {
  if (OS_IOS) {
    Alloy.Globals.Main.openWindow(Alloy.createController(e.rowData.file).getView());
  } else {
    Alloy.createController(e.rowData.file).getView().open();
  }
}

function doOpenInfo() {
  // Using the modal property only on iOS
  // on Android windows always behave as modals
  var winArgs = {};
  if (OS_IOS){
    // open modal
    winArgs.modal = true;
  }
  Alloy.createController('info').getView().open(winArgs);
}

var examples = [
    {title:'Fade Effects', platform:"android, iphone OS, ipad", hasChild:true, file:'examples/fade'},
    {title:'Fly In/Out', platform:"android, iphone, ipad", hasChild:true, file:'examples/flyin'},
    {title:'Reveal', platform:"android", hasChild:true, file:'examples/reveal'},
    {title:'Dial', platform:"android, iphone, ipad", header:'2D Matrix', hasChild:true, file:'examples/2dmatrix1'},
    {title:'Spinner', platform:"android, iphone, ipad", hasChild:true, file:'examples/2dmatrix2'},
    {title:'Clouds', platform:"android, iphone, ipad", hasChild:true, file:'examples/2dmatrix3'},
    {title:'Anchor Points', platform:"iphone, ipad", hasChild:true, file:'examples/anchorpoints'},
    {title:'3D Flip', platform:"iphone, ipad", header:'iOS 3D Matrix', hasChild:true, file:'examples/3dmatrix1'},
    {title:'Flip From Right/Left', platform:"iphone, ipad", header:"iOS Transitions", hasChild:true, file:'examples/transitions'},
    {title:'Page Curl Up/Down', platform:"iphone, ipad", hasChild:true, file:'examples/curl'},
    {title:'View Attachment Behavior', platform:"iphone, ipad", header:"iOS Dynamics", hasChild:true, file:'examples/viewAttachmentBehavior'},
    {title:'Dynamic Modal', platform:"iphone, ipad", hasChild:true, file:'examples/modalDynamics'},
    {title:'Dynamic Items', platform:"iphone, ipad", hasChild:true, file:'examples/dynamicItems'},
    {title:'Collision Behavior', platform:"iphone, ipad", hasChild:true, file:'examples/collisionBehavior'},
    {title:'Push', platform:"iphone, ipad", hasChild:true, file:'examples/push'},
    {title:'Snap', platform:"iphone, ipad", hasChild:true, file:'examples/snap'}
];

// Filter examples against Ti.Platform.name: android, iphone, ipad, mobileweb
examples = examples.filter(function(obj) {
  obj.color = '#999';
  obj.height = '44';
  re = new RegExp(Ti.Platform.osname);
  return (re.test(obj.platform));
});

$.tableView.setData(examples);



setTimeout(function() {
    if (OS_IOS) {
      $.win.showNavBar();
    }
    $.tableView.animate({opacity:1,duration:1000});
},2000);
