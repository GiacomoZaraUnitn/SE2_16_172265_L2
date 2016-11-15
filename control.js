// total quantity of objects stored
var totalQuantity = 0

// this functions updates the total quantity value and
// checks whether it exceeds the limit stated
// by the user or not
function checkQuantity(quantity, limit, isAdding){
    
    console.log("Limit = ", limit);
    
    // if the user is adding items, update the total quantity
    if(isAdding){
        // update the total quantity value
        totalQuantity = parseInt(totalQuantity) + parseInt(quantity);
    }
    
    console.log("total quantity = ", totalQuantity);
    
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

