$("./head") {
	remove("link[@rel='shortcut icon']");
	remove("link[@rel='apple-touch-icon']");

	insert("meta", name: "mobile-web-app-capable", content: "yes");
	insert("meta", name: "apple-mobile-web-app-capable", content: "yes");

	insert("link", rel: "shortcut icon", sizes: "196x196", href: asset("images/touchicon_highres.png"));
	insert("link", rel: "shortcut icon", sizes: "128x128", href: asset("images/touchicon.png"));
	insert("link", rel: "apple-touch-icon", sizes: "128x128", href: asset("images/touchicon.png"));
	insert("link", rel: "apple-touch-icon-precomposed", sizes: "128x128", href: asset("images/touchicon.png"));
	insert("link", rel: "icon", type: "image/x-icon", href: asset("images/favicon.ico"));

	$urlGbRootDir = "https://digimer.com.br/themes/digimer/js/greybox/";
	$urlGbRootDir {
		rewrite("link");
	}
	insert_javascript('var GB_ROOT_DIR = "' + $urlGbRootDir + '";');
	insert("script", type: "text/javascript", src: "/themes/digimer/js/greybox/AJS.js");
	insert("script", type: "text/javascript", src: "/themes/digimer/js/greybox/AJS_fx.js");
	insert("script", type: "text/javascript", src: "/themes/digimer/js/greybox/gb_scripts.js");
	insert("link", type: "text/css", rel: "stylesheet", href: "/themes/digimer/js/greybox/gb_styles.css");
}