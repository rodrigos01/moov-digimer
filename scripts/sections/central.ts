  move_here(".//div[@class='lista_produto']/parent::*/*");

  $(".//div[@class='lista_produto']") {
  	move_here("self/preceding-sibling::form");
    insert("div", class: "border");
  }