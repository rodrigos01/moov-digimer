/* Default JS */

var $j = jQuery.noConflict();

function listeners() {
	$j("a.icons-user").click(function(e) {
		e.preventDefault();
		$j(".loginBox").toggle('fold');
		e.stopPropagation();
	});

	$j("a.icons-menu").click(function(e) {
		e.preventDefault();
		$j(".menu").toggleClass("active");
		e.stopPropagation();
	});
}
