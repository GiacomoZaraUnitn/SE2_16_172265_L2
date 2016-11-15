/*
The model script contains the functions that manage the data into the
structures (arrays) used in the solution
*/

// array for the objects
var items = []

// array for the quantities for each object
var quantities = []

// limit value (default = 30)
var limit = 30;

// this function sets the insertion form as visible
function show(){
    var form = document.getElementById("myForm");
    var btn = document.getElementById("addButton");
    form.style.visibility = "visible";
    btn.style.visibility = "visible";
    
}

// this function sets the insertion form as hidden and resets its values
function hide(){
    var form = document.getElementById("myForm");
    var btn = document.getElementById("addButton"); 
    form.style.visibility = "hidden";
    btn.style.visibility = "hidden";
    form.elements[0].value = "";
    form.elements[1].value = "";
    
}

// this function inserts the new values in the arrays
function insert(){
    
    // retrieve the values inserted by the user in the form
    var form = document.getElementById("myForm");
    item = form.elements[0].value;
    quantity = form.elements[1].value;
    
    // if the item is already stored...
    if(alreadyIn(item, items)){
        
        console.log("Is already in")
        
        // update the array
        quantities[findIndex(item)] = quantities[findIndex(item)] + 1;
        
        // keepe track of the index of the updated item quantity
        var index = findIndex(item);
        
        // update the html 
        updateTable(item, quantity, index, true);
    }
    
    // otherwise...
    else{
        
        // add the item and its quantity to the array in a new column
        items.push(item);
        quantities.push(quantity);
        
        // update the html
        updateTable(item, quantity, -1, false);
        
    }
    
    // check if the limit stated by the user was exceeded
    checkQuantity(quantity, limit);
    
    // hide the form
    hide();
}

// this function sets the limit once the user presses the button
function setLimit(){
    
    // retrieve the value inserted by the user in the form
     var form = document.getElementById("limitForm");
     limit = parseInt(form.elements[0].value);
}

// this function returns the index of the object given as parameter, -1 if not found
function findIndex(item){
    var res = -1;
    
    // iterate trough the array, returning the index once its found
    for(var i = 0; i < items.length; i++){
        if(items[i] == item){
            res = i;
            console.log("ritorno ", res);
            return res;
        }
    }
    return res;
}

