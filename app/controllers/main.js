var args = arguments[0] || {};

$.tableView.setData([
    {title:'Fade Effects', hasChild:true, file:'examples/fade'},
    {title:'Fly In/Out', hasChild:true, file:'examples/flyin'},
    {title:'Dial', header:'2D Matrix', hasChild:true, file:'examples/2dmatrix1'},
    {title:'Spinner', hasChild:true, file:'examples/2dmatrix2'},
    {title:'3D Flip', header:'iOS 3D Matrix', hasChild:true, file:'examples/3dmatrix1'},
    {title:'Flip From Right/Left', header:"iOS Transitions", hasChild:true, file:'examples/transitions'},
    {title:'Page Curl Up/Down', hasChild:true, file:'examples/curl'},
    {title:'View Attachment Behavior', header:"iOS Dynamics", hasChild:true, file:'examples/viewAttachmentBehavior'},
    {title:'Dynamic Modal', hasChild:true, file:'examples/modalDynamics'},
    {title:'Dynamic Items', hasChild:true, file:'examples/dynamicItems'},
    {title:'Collision Behavior', hasChild:true, file:'examples/collisionBehavior'},
    {title:'Push', hasChild:true, file:'examples/push'},
    {title:'Snap', hasChild:true, file:'examples/snap'}
]);

function doClick(e) {
    Alloy.Globals.Nav.openWindow(Alloy.createController(e.rowData.file).getView());
}

function doOpenInfo() { 
    Alloy.createController('info').getView().open({modal:true});
}


setTimeout(function() {
    $.win.showNavBar();
    $.tableView.animate({opacity:1,duration:1000});
},2000);
