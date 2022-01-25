$(document).ready(function() {
    var max_fields      = 6; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div> <select name="risoto'+x+'" id="sabor"><optgroup label="Risotos"><option value="camaraobacon">Risoto de Camarão com Bacon - 65.00</option><option value="mignongorgonzola">Risoto de Filé Mignon com Gorgonzola - 65.00</option><option value="cogumelos">Risoto de Cogumelos - 65.00</option><option value="polvo">Risoto de Polvo - 65.00</option> <option value="briedamascos">Risoto de Brie com Damascos - 55.00</option><option value="baconabacaxi">Risoto de Bacon e Gorgonzola com Abacaxi Caramelizado - 55.00</option> <optgroup></select> <select name="quantidade'+x+'" aria-label="quantidade"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>'); // add input boxes.
                        
        }
        
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});
