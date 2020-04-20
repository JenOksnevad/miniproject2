$(document).ready(function () {
$(".underwater").hide();
//$(".fish1").hide();
//$(".fish2").hide();	
    $(".droplet").click(function() {
        $(".droplet").animate({left: '0px', top:'300px'}); //droplet goes down
		$(".droplet").fadeTo("fast", 0); //droplet disappears when hitting splash
		$(".splash1").delay(450).effect("shake", {times:4}, 1000); //shake water
		$(".splash1").fadeTo("slow", 0); //fade out water
		$(".underwater").delay(1500).fadeIn(1000); //fade in fish background
		//$(".fish1").delay(1500).fadeIn(1000); //fade in fish 1
		//$(".fish2").delay(1500).fadeIn(1000); //fade in fish 2			

    });


});