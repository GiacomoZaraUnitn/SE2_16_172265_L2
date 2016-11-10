// total quantity of objects stored
var totalQuantity = 0

// this functions updates the total quantity value and
// checks whether it exceeds the limit stated
// by the user or not
function checkQuantity(quantity){
    
    // retrieve the limit stated by the user
    var form = document.getElementById("myForm");
    var limit = parseInt(form.elements[2].value);
    
    // update the total quantity value
    totalQuantity = parseInt(totalQuantity) + parseInt(quantity);
    
    // if the limit is exceeded, notice the user with an alert
    if(parseInt(totalQuantity) > parseInt(limit)){
        alert("Warning: the limit stated was exceeded");
    }
}

// this function checks whether the object given as
// parameter is already stored in the array or not
function alreadyIn(item, items){
    var res = false;
    
    // iterate through the array
    for(var i = 0; i < items.length; i++){
        if (items[i] == item){
            res = true;
        }
    }
    return res;
}

