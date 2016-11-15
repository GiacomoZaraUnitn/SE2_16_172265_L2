/*
The view script contains the function that updates the table in 
the web page with the new values inserted by the user
*/

// arrays for the two lines of the table
var cells1 = []
var cells2 = []

// this function updates the html in order to show the user 
// an up-to-date table 
function updateTable(item, quantity, index, trigger) {
    
    // trigger is a boolean variable which indicates whether the object that is to be inserted
    // is already stored or not
    
    // if it is, update the respective cell in the table, using the index given as parameter
    if(trigger){
        cells2[index].innerHTML = parseInt(cells2[index].innerHTML) + parseInt(quantity);
    }
    
    // otherwise...
    else{
        
        // get the html elements into js variables
        var row1 = document.getElementById("row1");
        var row2 = document.getElementById("row2");
        var form = document.getElementById("myForm");
        var itemValue = form.elements[0].value;
        var quantityValue = form.elements[1].value;
        
        // insert new cells
        var cell1 = row1.insertCell();
        var cell2 = row2.insertCell();
        cells1.push(cell1);
        cells2.push(cell2);
        
        // update the new cells with the values given as parameters
        cell1.innerHTML = itemValue;
        cell2.innerHTML = quantityValue;   
    }
}