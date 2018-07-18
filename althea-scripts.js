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

      // Wait for element to Exist
      setTimeout(function(){
      
        // Get element height
        var mapHeight = $('#altheaMapArea .et_pb_code').height();
        console.log('Mi tamano es: ' + mapHeight);

      // Add same height to siblings
        $('[id="altheaSliderItem"]').css("height", mapHeight);
        $('#altheaAnimation').css("height", mapHeight);

        }, 3000);

      // Slider onClick Function
      $('#countryMap1').click(function(){
          $('#altheaSliderItem:nth-child(2)').fadeIn("slow");
          $('#altheaSliderItem:not(:nth-child(2))').css("display", "none");
            console.log('Hola Soy countryMap1');
      });

      $('#countryMap2').click(function(){
        $('#altheaSliderItem:nth-child(3)').fadeIn("slow");
          $('#altheaSliderItem:not(:nth-child(3))').css("display", "none");
          console.log('Hola Soy countryMap2');
      });

      $('#countryMap3').click(function(){
        $('#altheaSliderItem:nth-child(4)').fadeIn("slow");
          $('#altheaSliderItem:not(:nth-child(4))').css("display", "none");
          console.log('Hola Soy countryMap3');
      });
    });

    // using on

$('.et_pb_section_0').bind('mousewheel', function(event) {
  event.preventDefault();
  var scrollTop = this.scrollTop;
  this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
  console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta);
});



 // Branding
 console.log("%c Made with  💖 and a lot of  ☕ by el.puas | https://elpuas.com ", "color:#fff;background:#000;");
 
 // End Document Ready

});
