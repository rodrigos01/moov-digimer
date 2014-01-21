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

      insert("div", id: "destaques") {
        insert("h1", "DESTAQUES");
        move_here("../div[@id='listagem']/table[1]/tr[2]/td[2]/*") {
          insert("div", class: "product_description") {
            move_here("../table/tr[1]/td[1]/*");
          }
          insert_at("top", "div", class: "product_image") {
            move_here("../table/tr[1]/td[2]/*");
          }
          remove("./table");
        }
        insert("div", class: "controles") {
          move_here("../../div[@id='listagem']/table[1]/tr[3]/td[2]/table/tr[1]/td[2]/span/*");
        }
      }

      move_here(".//div[@class='lista_produto']") {
        insert("div", class: "border");
      }
    };

    insert("div", id: "backblock", class: "menu");
  	insert("div", class: "menu") {
  		move_here("//td[@class='menu']") {
        remove(".//img");
      }
  		remove(".//table");
  	}
  }
}

$('./body') {
  remove(".//table[@id='conteudo_table']");
  remove(".//table[@id='rodape_table']");
  remove(".//div[@id='listagem']");
}