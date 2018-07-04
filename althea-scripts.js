jQuery(document).ready(function($){

    // Check if Element Exist in the DOM
    $.fn.exists = function(callback) {
        var args = [].slice.call(arguments, 1);
      
        if (this.length) {
          callback.call(this, args);
        }
      
        return this;
    };
      
      // Usage
      $('#altheaMapArea').exists(function() {
        console.log('Si Existo');

      // Get element height
      var mapHeight = $('#altheaMapArea .et_pb_code').height();
       console.log('Mi tamano es: ' . ' ' . mapHeight);

      // Add same height to siblings
      $('[id="altheaSliderItem"]').css("height", mapHeight);

      // Slider onClick Function
      $('#countryMap1').click(function(){
            console.log('Hola Soy countryMap1');
      });

      $('#countryMap2').click(function(){

          console.log('Hola Soy countryMap2');
      });

      $('#countryMap3').hover(function(){

          console.log('Hola Soy countryMap3');
      });
    });



 // Branding
 console.log("%c Made with  💖 and a lot of  ☕ by el.puas | https://elpuas.com ", "color:#fff;background:#000;");
 
 // End Document Ready

});
