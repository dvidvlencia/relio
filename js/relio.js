(function ($) {
    $.fn.extend({
        
        right: function (){
            $(this).each(function(){
                var selector = $(this);
                var options = {
                    valueDirection: '-100%',
                    axis: 'x'
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
                    valueDirection: '100%',
                    axis: 'x'
                };
                filterTag(selector, options);
            });
        },
        top: function(){
            $(this).each(function(){
                var selector = $(this);
                var options = {
                    valueDirection: '-200%',
                    axis: 'y'
                }
                filterTag(selector, options);
            });
        },
        bottom: function(){
            $(this).each(function(){
                var selector = $(this);
                var heightBody = $("body").height();
                var height = heightBody + "px";
                var options = {
                    valueDirection: height,
                    axis: 'y'
                }
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
    $("body").css({"position":"relative", "overflow": "hidden"});
    var nameSelector = selector[0]['tagName'];
    if(nameSelector === 'A'){
        
        var value = options.valueDirection;
        $("body").removeAttr("class");
        var href = selector.attr('href');
        event.preventDefault();
        
        /*observamos la orientacion*/
        var Axis;
        if(options.axis === 'x'){
            Axis = { left : value};
        } else if(option.axis === 'y'){
            Axis = { top : value};
        } else {
            console.log('no se reconoce ningun axis para ejecutar el efecto');
        }
        
        $("body").animate(
            Axis,
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
        
        var Axis;
        if(options.axis === "x"){
            Axis = { left : value};
        } else if(options.axis === 'y'){
            Axis = { top : value};
        } else {
            console.log("no se encontro un axis para poder ejecutar el efecto");
        }
        
        $("body").animate(
            Axis,
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