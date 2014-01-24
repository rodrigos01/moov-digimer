/* Default JS */

$j = jQuery.noConflict();

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

	$j("#central").bind("DOMSubtreeModified", function() {
		$j(".menu").removeClass("active");
	});

	$j("form#busca").submit(function(e) {
		$j("#onde_procurar").val("");
		$j("#marca").val("");
		return true;
	})
}
