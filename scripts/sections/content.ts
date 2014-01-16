$('./body/header') {
  insert_after("div", class: "_content") {
    move_here("//form[@name='busca']");
  	move_here("//div[@id='central']");

  	insert("div", class: "menu") {
  		move_here("//td[@class='menu']");
  		remove(".//table");
  	}
  }
}

$('./body') {
  remove(".//table[@id='conteudo_table']");
  remove(".//table[@id='rodape_table']");
}