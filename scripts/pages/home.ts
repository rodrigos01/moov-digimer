$$("body") {
	add_class("_home")

	$("//div[@id='central']") {
	  insert_at("top", "div", id: "destaques") {
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

  	  remove(".//div[@id='listagem']");
	}
}