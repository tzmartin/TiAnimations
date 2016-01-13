// Expose the main view as a global so we can access a navigation control
if ($.main.__iamalloy) {
  Alloy.Globals.Main = $.main.getView();
} else {
  Alloy.Globals.Main = $.main;
}

/*
  View:   Lower 3rd
  Note:   On iOS this is added directly to the NavigationWindow as a nested child
*/
Alloy.Globals.Main.add(Alloy.createController('lowerthird').getView());
