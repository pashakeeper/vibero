$(document).ready(function () {

    // Language dropdown
    $(".language .language_selected").click(function() {
        $(this).toggleClass('dropped')
        $(".language .options_language").toggle();
    });

    $(".language .options_language li").click(function() {
        var selectedValue = $(this).attr("data-value");
        $(".language .language_selected").html($(this).text()+'<img src="img/shevron.svg" alt="">');
        $(".language .options_language").hide();
        $('.language .language_selected').removeClass('dropped')
    });
    $(document).mouseup(function(e) {
        var container = $(".language");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.language .language_selected').removeClass('dropped')
            container.find(".options_language").hide();
        }
    });

//     burger & mobile menu
    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('.menu_box').slideToggle();
    })
    
})