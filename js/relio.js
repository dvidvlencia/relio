(function ($) {
    $.fn.extend({
        
        right: function (){
            $(this).each(function(){
                var selector = $(this);
                filterTag(selector, 'right');
            });
        },
        
        left: function (){
            $(this).each(function(){
                var selector = $(this);
                filterTag(selector, 'left');
            });
        }
        
    });
})(jQuery);
/*
debe captar el seletor y el nombre del efecto para poder ejecutar el transition
*/

function filterTag(selector, effect){
    console.log(effect);
    var nameSelector = selector[0]['tagName'];
    if(nameSelector === 'A'){
        $("body").removeAttr("class");
        /*capturamos el link destino*/
        var href = selector.attr('href');
        event.preventDefault();
        $("body").addClass("testTagA");
//        $("body").hide("slide", { direction: "left" }, 1000);
//        alert(href);
    } else {
        $("body").removeAttr("class");
        var href = selector.attr('data-link');
        $("body").addClass("testTag");
//        $("body").animate({left: '-100%', opacity: '0.5'});
//        alert(href);
    }
}