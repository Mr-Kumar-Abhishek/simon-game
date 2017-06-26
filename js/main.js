var gameSwitch = false;

$("#power-switch").click(function (){
	if (gameSwitch == false ){
		
		$(this).addClass("switch-on");
		gameSwitch = true;
	}else {
		$(this).removeClass("switch-on");
		gameSwitch =false;
	}
});
