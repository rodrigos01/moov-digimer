$("//div[@id='central']") {
	@import ../sections/central.ts
	remove("./table[2]/following-sibling::table");
}