
#remove("*")

@import ../sections/central.ts
remove("./table[4]/following-sibling::table");
remove("./table[4]/following-sibling::img");

$("./table[@width]") {
	attribute("width", "100%");
}