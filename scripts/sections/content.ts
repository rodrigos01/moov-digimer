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
      $("div[@id='listagem']/table[1]") {
        attribute("width", "100%");

        $("./tr[2]/td[2]") {
          insert("div", class: "controles") {
            move_here("../../../tr[3]/td[2]/table/tr[1]/td[2]/span/*");
          }
          $("./span") {
            insert("div", class: "product_description") {
              move_here("../table/tr[1]/td[1]/*");
            }
            insert_at("top", "div", class: "product_image") {
              move_here("../table/tr[1]/td[2]/*");
            }
            remove("./table");
          }
        }
        $("./tr[3]/td[2]/table") {
          attribute("width", "auto");
        }

      }
      move_here(".//div[@class='lista_produto']");
      remove("div[@id='listagem']/table[not(@width='100%')]");
      remove("div[@id='listagem']/img");
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
}