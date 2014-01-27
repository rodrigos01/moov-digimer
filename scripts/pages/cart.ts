$("//div[@id='central']") {

	add_class("_cart")

	move_here("./table[@width='500']//td[@align='center']/div", "top");

	insert_at("top", "h1", "Carrinho de Compras", class: "title icons-cart");
	remove("./table[1]");



	#remove("./table[2]/following-sibling::table");
}