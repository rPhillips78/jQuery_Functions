$(document).ready(function(){

    $('.on_click').click(function(){
        alert("The click function at work!");
    });

    $('.hide').click(function(){
        $('.hidden').hide();
    });

    $('.show').click(function(){
        $('.shown').show();
    });

    $('.toggle').click(function(){
        $('.toggled').toggle();
    });

    $('.slide-up').click(function(){
        $('.slider').slideUp();
    });

    $('.slide-down').click(function(){
        $('.slider').slideDown();
    });

    $('.s_toggle').click(function(){
        $('.t_slider').slideToggle();
    });

    $('.fade-in').click(function(){
        $('.fader-show').fadeIn("slow");
    });

    $('.fade-out').click(function(){
        $('.fader-out').fadeOut();
    });

    $('.add-red').click(function(){
        $('.red-p').addClass('red');
    });

    $('.before').click(function(){
        $('.insert').before("<p>I just put this here!</p>");
    });
    $('.after').click(function(){
        $('.rear').after("<p>I just put this here!</p>");
    });

    $('.append').click(function(){
        $('.appended').append(", I jut put this here")
    });
    $('.html').click(function(){
        $('.manipulate').html("I just put this here with the .html function");
    });
    $('.attribute').click(function(){
        console.log($('a.btn').attr("role"));
    });
    $('.value').click(function(){
        $('input').val(["check1","check2"]);
    });
    $('.text').click(function(){
        $('.text_section').text("The text function at work")
    });
});