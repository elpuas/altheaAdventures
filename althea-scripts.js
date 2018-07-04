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
        console.log('Si Existo /n');
      });

      // get parent div height
      var mapHeight = $('#altheaMapArea .et_pb_code').height();
        $('[id="altheaSliderItem"]').css("height", mapHeight);

      // Slider Hover Function
      $('#countryMap1').onclick(function(){
            console.log()
      });
      $('#countryMap2').hover(function(){

          console.log('Hola soy mapa uno');
      });
      $('#countryMap3').hover(function(){

          console.log('Hola soy mapa uno');
      });




 console.log("%c Made with  💖 and a lot of  ☕ by el.puas | https://elpuas.com ", "color:#fff;background:#000;");


});
