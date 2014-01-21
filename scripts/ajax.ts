$("//form[@name='comprar']") {
	log("--> Importing product.ts.");
	@import pages/product.ts
}

$("../"){
	move_here("/body/*");
}
#remove("/html");