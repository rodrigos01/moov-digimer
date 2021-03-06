
@import ../sections/central.ts
remove("./table[4]/following-sibling::table");
remove("./table[4]/following-sibling::img");

$("./table[@width]") {
	attribute("width", "100%");
}

insert_at("top", "div", class: "_product") {

	insert("div", class: "product_image") {
		move_here("../..//table[2]/tr[1]/td[1]");
		remove(".//br");
		$(".//center") {
			remove("./font");
		}
	}
	insert("div", class: "product_description") {
		move_here("../..//table[2]/tr[1]/td[2]") {
			remove("./b[1]/preceding-sibling::text()");
		}
		remove(".//br[1]");
		remove(".//br[2]");
		remove(".//br[3]");
	}

	insert_at("top", "div", class: "product_title") {
		move_here("../div[@class='product_description']//b[1]", "top");
	}

	$("./div[@class='product_image']") {
		insert_after("div", class: "product_price") {
			move_here("../../table[3]/tr[1]/td[2]");
			move_here("../div[@class='product_description']//form") {
				remove(".//br");
				insert("input", class: "button icons-cart", type: "submit", value: "Adicionar ao Carrinho");
			}
		}
	}

	remove("..//table");

	insert_after("h1", "Veja Também", class: "veja_tambem");

}

$("./div[@id='listagem']/a") {
		insert("div", id: "cartConfirm") {
			insert("a", "Produto adicionado ao carrinho de compras com sucesso", class: "cartAddConfirmation", href: "/handler.php?module=site&action=view&section=pedido");
			insert("a", "Continuar comprando", class: "button icons-keepbuying", href: "/");
			insert("a", "Finalizar compra", class: "button icons-checkout", href: "/handler.php?module=site&action=view&section=pedido");
		}
}

move_here("./div[@id='listagem']/a/div[@id='cartConfirm']", "top");

remove("./div[@id='listagem']");
remove("./div[@class='_product']/following-sibling::span");