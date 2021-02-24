console.log("Your index.js file is loaded correctly!");

$('.scroll').click(function(){
   console.log("Your index.js file is loaded correctly!");
  $("html, body").animate(
      {scrollTop: $("#Row1").offset().top},
      500,
      "swing",
      function(){
         }
      )
});