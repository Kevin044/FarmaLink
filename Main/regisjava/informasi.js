
jQuery( document ).ready(function() {
		
    var back =jQuery(".prev");
    var	next = jQuery(".next");
    var	steps = jQuery(".step");
    
    next.bind("click", function() { 
        jQuery.each( steps, function( i ) {
            if (!jQuery(steps[i]).hasClass('current') && !jQuery(steps[i]).hasClass('done')) {
                jQuery(steps[i]).addClass('current');
                jQuery(steps[i - 1]).removeClass('current').addClass('done');
                return false;
            }
        })		
    });
    back.bind("click", function() { 
        jQuery.each( steps, function( i ) {
            if (jQuery(steps[i]).hasClass('done') && jQuery(steps[i + 1]).hasClass('current')) {
                jQuery(steps[i + 1]).removeClass('current');
                jQuery(steps[i]).removeClass('done').addClass('current');
                return false;
            }
        })		
    });
    function next(){
        
    }

})


var operasional = document.getElementById("jamOperasional"),
form = document.getElementsByTagName("form")[0],
ContestantNum = 2,
i;
for(i=0; i<ContestantNum; i++){
var clone = operasional.cloneNode(true);
form.appendChild(clone);
}

function onlyNumberKey(evt) {
          
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}