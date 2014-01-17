$('./body/header') {
  insert_after("div", class: "_content") {

    insert("a", class: "button icons-menu", href: "#", title: "Menu");

    move_here("//form[@name='busca']"){
      $('.//input') {
        attribute("placeholder", "busca");
      }
    }
  	move_here("//div[@id='central']") {
      $("div[@id='listagem']/table[1]") {
        attribute("width", "100%");
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