//https://api.jquery.com/
//https://www.w3schools.com/jquery/jquery_ref_selectors.asp

$(function() {
	
	// EVENT METHODS
	
	//click method 
	$('#box').click(function() {
		$('h1').css("color", "cornflowerblue");		
	});
	
	$('button').click(function() {
//		$('#box').fadeOut(1000);
//		$('.thing').fadeOut();
		$('#box').fadeToggle( "slow", "linear" );
	});
	
	$("input").blur(function() {
		
		if( $(this).val() == "") {
			$(this).css('border', 'solid 2px orange');
			$('#box').text('Forgot to add text?');
		}
	});
	
	$("input").keydown(function() {
		
		if( $(this).val() !== "") {
			$(this).css('border', 'solid 1px #777');
			$('#box').text('Thanks for that!').css('color', 'yellow');
		}
	});
	
	$('.thing').hover(function() {
		$(this).text("you hovered in").css('color', 'cornflowerblue');		
	}, function() {
		
		$(this).text("you hovered out").css('color', 'purple');
	});
		
});


