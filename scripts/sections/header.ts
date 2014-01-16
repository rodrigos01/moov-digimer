$('./body') {
  insert_top("header", class: "_header") {
    insert("div", class: "login") {
    	move_here("//form[@name='user']");
    }
  }

  #remove(".//p");
}

