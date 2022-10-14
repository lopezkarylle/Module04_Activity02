//If else statement
function val(){
    let val_A = prompt("Input a number as value A:", "");
    let val_B = prompt("Input a number as value B:", "");

    if (val_A>val_B) {
        alert("Value A is higher.");
    }else if (val_A<val_B){
        alert("Value B is higher.");
    }
    else{
        alert("Value A and B are equal.");
    }
}