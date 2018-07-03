jQuery(document).ready(function($){

  $(function(){

    if ($('#altheaMapArea').lenght > 0 ) {
      // get parent div height
      var mapHeight = $('#altheaMapArea').height();

      console.log(mapHeight);

      // Slider Hover Function
      $('#countryMap1').hover(function(){
          console.log('Hola soy mapa uno');

        });
    }

  });

 console.log("%c Made with  💖 and a lot of  ☕ by el.puas | https://elpuas.com ", "color:#fff;background:#000;");


});
