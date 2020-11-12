$(function(){

    
    $("a").click(function(event){

        if(this.hash !== "") {
            event.preventDefault();

            var bajar = this.hash;

            $("html, body").animate({
                scrollTop: $(bajar).offset().top
            }, 900, function(){
                window.location.hash = bajar;
            });
        }
    });

    $('[data-toggle="tooltip"]').tooltip();

  });