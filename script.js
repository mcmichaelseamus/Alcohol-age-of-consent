var age = prompt("How old are you?");

if(age <= 21){
    console.log("Allowed to enter, but not alocohol");
}
else if(age < 18){
    console.log("You are too young to enter");

}

else if(age >= 21){
    console.log("You are okay to enter,and purchase alcohol.");
}