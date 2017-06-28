var gameSwitch = false;
var strictSwitch = false

$("#power-switch").click(function (){
	if (gameSwitch == false ){
		
		$(this).addClass("switch-on");
		$("#counting").addClass("counting-on");
		gameSwitch = true;
	}else {
		$(this).removeClass("switch-on");
		$("#counting").removeClass("counting-on");
		gameSwitch =false;
	}
});

$("#strict").click(function () {
	
	if ( gameSwitch == false ) {
		
		// do nothing 
	} else {
		
		if (strictSwitch == false){
			
			$(".led").addClass("led-on");
			strictSwitch = true;
		}else {
			$(".led").removeClass("led-on");
			strictSwitch = false;
		}
	} 
});

