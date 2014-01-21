# HTML Transformations go here

match($path) {
  with(/handler\.php\?module=site&action=view&ajax=true$/) {
    log("--> This is an Ajax response.");
    @import ajax.ts
  }
  else() {
    $("/html") {

      rewrite_links()
      absolutize_srcs()

        
      # Add the mobile meta tags 
      clean_mobile_meta_tags()

        
      # Needed to begin mobilizing
      #remove_all_styles()
      remove_html_comments()

      # Late load all the images on the site
      # lateload()
      



      add_assets()

      @import sections/script.ts
      @import sections/header.ts
      @import sections/content.ts
      @import sections/footer.ts

      @import mappings.ts
    }
  } 
}

