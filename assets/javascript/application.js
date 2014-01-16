/* Default JS */

var $j = jQuery.noConflict();

function listeners() {
	console.debug($j("a.icons-user"));
	$j("a.icons-user").click(function(e) {
		e.preventDefault();
		$j(".loginBox").toggle('fold');
		e.stopPropagation();
	});
}
