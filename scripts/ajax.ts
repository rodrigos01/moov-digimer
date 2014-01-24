html_fragment() {
	$(".//form[@name='comprar']/parent::*/parent::*/parent::*/parent::*") {
		log("--> Importing product.ts.");
		@import pages/product.ts	
	}
	$(".//b[contains(., 'Pesquisa por')]/parent::*") {
		log("--> Importing search.ts.");
		@import pages/search.ts	
	}
	$(".//font[contains(., ' > ')]/parent::*") {
		log("--> Importing search.ts.");
		@import pages/search.ts	
	}
}