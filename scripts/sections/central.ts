  move_here(".//div[@class='lista_produto']/parent::*/*");

  $(".//div[@class='lista_produto']") {
  	move_here("self/preceding-sibling::form");
  	move_here("self/following-sibling::a");
  	remove("self/following-sibling::br");
    insert("div", class: "border");
  }