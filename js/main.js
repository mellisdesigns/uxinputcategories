
$(document).ready(function () {

    /*
        Some quick specific page based jquery events to demonstrate input sub categories.
        This is also an example of how I like to write Javascript.
        
        and a cat . . .
        
        /\___/\
        ( o   o )
        (  =^=  )
        (        )
        (         )
        (          )))))))))))

        
    */
    
    //Initialise all of the select components on the template
    $('select').material_select();

    //Listener for Example 3 Input Sub using jQuery
    $('input[id=product_weight_eg3]').keyup(function(){
        
        console.log("Key Event Called");
        
        //Check to see whether we can parse string
        var getUnitType = StringPasser.ReturnUnitFromInput($(this).val());
        
        //If our string passer does not return null, change the label, else we show na
        //When using the model in Ember or Angular, this will be different.
        if(getUnitType) $('p[data-id=label_eg3_unit]').text(getUnitType);
        else $('p[data-id=label_eg3_unit]').text('NA');
        
    })
    
    //Add a string passer controller into the model
    var StringPasser = new function()
    {
        this.ReturnUnitFromInput = function(inputString)
        {
            var splitInput = inputString.split(" ");
            
            //We have some rules that apply here. The first property should be a number and the second should be a unit.
            //First we can check that at least two items are split from the input string.
            if(splitInput.length == 2)
            {
                //Next we should check whether the first value is a number
                //We do this by trying to cast the first value of the array toa number, if it is not, we will get NaN.
                if(!isNaN(Number(splitInput[0])))
                {
                    //We can consider this a succesfull pass of the string
                    //Return the unit from the string passed in.
                    return splitInput[1];
                }
            }
            
            return null;
        }
    }
    
});