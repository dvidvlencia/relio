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
        alert('Tag a - '+nameSelector);
    } else {
        alert('Nombre del selector - '+nameSelector);
    }
}