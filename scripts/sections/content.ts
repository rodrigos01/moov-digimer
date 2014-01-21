$('./body/header') {
  insert_after("div", class: "_content") {

    insert("div", class: "pannel") {

      insert("a", class: "button icons-menu", href: "#", title: "Menu");

      move_here("//form[@name='busca']"){
        $('.//input') {
          attribute("placeholder", "busca");
        }
      }
      
    }

    
  	move_here("//div[@id='central']") {
      @import central.ts
    }

    insert("div", id: "backblock", class: "menu");
  	insert("div", class: "menu") {
  		move_here("//td[@class='menu']") {
        remove(".//img");
      }
  		remove(".//table");
      remove(".//div[@class='menu_sub1_f']")
      remove(".//div[@class='menu_sub2_f']")
  	}
  }
}

$('./body') {
  remove(".//table[@id='conteudo_table']");
  remove(".//table[@id='rodape_table']");
}