$('./body') {
  insert_top("header", class: "_header") {

  	insert("a", class: "sprites-logo", href: "/", title: "home");

  	insert("a", class: "button icons-user", href: "#", title: "Usuário");

  	insert("a", class: "button icons-cart", href: "https://www.digimer.com.br/handler.php?module=site&action=view&section=pedido", title: "carrinho de compras");

    insert("div", class: "loginBox") {
    	move_here("//form[@name='user']") {
    		remove(".//img");
    		remove(".//a");
    		$(".//input[@class='login']") {
    			insert_before("label", "Login");
    			insert_after("br");
    		}
    		$(".//input[@class='pass']") {
    			insert_before("label", "Senha");
    			insert_after("br");
    		}
    		insert("input", type: "submit", value: "Ok");
    	}
    }
  }

  insert_javascript_at("bottom", "listeners()");

  remove(".//p");
}

