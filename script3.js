$(document).ready(function(){
	$("#flip").click(function(){
		$("#panel").slideDown("slow");
		$("#flip").slideUp("slow");
	});

	
});

$(document).ready(function(){
	$("#panel").click(function(){
		$("#panel").slideUp("slow");
		$("#flip").slideDown("slow");

	});

});





