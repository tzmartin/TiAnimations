var args = arguments[0] || {};

function closeWin(evt){
	$.win.close();
}

function toggleView(){
	if ($.theView.visible){
		$.theView.hide({animated:true})
	}else{
		$.theView.show({animated:true})
	}
}
