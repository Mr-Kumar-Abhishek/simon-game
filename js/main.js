var gameSwitch = false;

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
