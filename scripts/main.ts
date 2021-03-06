# The main file executed by Tritium. The start of all other files.

match($path) {
  with(/handler\.php\?module=site&action=view&ajax=true$/) {
    log("--> This is an Ajax response.");
    @import ajax.ts
  }
  with(/themes\/digimer\/js\/greybox/) {
    log("--> Don't mess the images!!.");
  }
  else() {
    match(inferred_content_type()) {
      with(/html/) {
        replace(/fb:/, "fbn_") # Rewrite the xmlns facebook nodes before the html parser clobbers them

        # Force UTF-8 encoding. If you'd like to auto-detect the encoding,
        # simply remove the "UTF-8" argument.  e.g. html(){ ... }
        html() {
          @import device_detection.ts  
          
          @import html.ts
        }

        replace(/fbn_/, "fb:") # Rewrite the xmlns facebook nodes to restore them
      }
      #with(/javascript/) {
      #   @import ajax.ts
      #}
      else() {
        log("Passing through " + $content_type + " unmodified.")
      }
    }
  }
}
