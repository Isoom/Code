document.addEventListener('DOMContentLoaded', function() {
	var menuLinks = document.querySelectorAll('.menu-container a');
	//lägg till .menu-container om du ska ha endast för menyn

	// Lägger till stil för när man hovrar över länken
	function addHoverStyle() {
	    	this.style.color = '#000000';
		this.style.textDecoration = "overLine"
		// ändrade till detta för att jag tycker det va snyggare :)
	}
    
	// Tar bort stil för när man hovrar över länken
	function removeHoverStyle() {
	    	this.style.color = '';
		this.style.textDecoration = ""
	}

    
	// Loopa igenom varje menylänk och tilldela händelsehanterare
	menuLinks.forEach(function(link) {
	    link.onmouseover = addHoverStyle;
	    link.onmouseout = removeHoverStyle;
	});
});




