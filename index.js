$(document).ready(function(){
  $(".logo-box a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      
      var hash = this.hash;
      console.log(hash);
      console.log($(hash).offset());
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });
});
