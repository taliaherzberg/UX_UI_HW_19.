console.log("Your index.js file is loaded correctly!");

$('.scroll').click(function(){
  $(‘html, body’).animate({
      scrollTop: $($(this)).offset().top
  }, 750 );
  return false;
});