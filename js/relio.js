(function ($) {
    $.fn.extend({
        
        right: function (){
            $(this).each(function(){
                var selector = $(this);
                var options = {
                    valueDirection: '-100%'
                };
                filterTag(selector, options);
                //for outside variable
                //var filter = test();
                //alert(filter);
                
                
            });
        },
        
        left: function (){
            $(this).each(function(){
                var selector = $(this);
                var options = {
                    valueDirection: '100%'
                };
                filterTag(selector, options);
            });
        }
    });
})(jQuery);
/*
debe captar el seletor y el nombre del efecto para poder ejecutar el transition
*/
//function test(){
//    variable = "outside variable";
//    return variable;
//}
function filterTag(selector, options){
    var nameSelector = selector[0]['tagName'];
    if(nameSelector === 'A'){
        var value = options.valueDirection;
        $("body").removeAttr("class");
        var href = selector.attr('href');
        event.preventDefault();
        $("body").animate(
            { left : value},
            {
                easeing: 'easeInOutBounce',
                duration: 500, 
                complete: function(){
                }
            }
        );
        setTimeout(function(){ window.location.href = href; }, 500);
        
    } else {
        var value = options.valueDirection;
        
        $("body").removeAttr("class");
        var href = selector.attr('data-link');
        $("body").animate(
            { left : value},
            {
                easeing: 'easeInOutBounce',
                duration: 500, 
                complete: function(){
                }
            }
        );
        setTimeout(function(){ window.location.href = href; }, 500);
        
    }
}