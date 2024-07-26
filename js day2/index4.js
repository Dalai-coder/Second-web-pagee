let x=Number(prompt("Enter a x number"));
if (isNaN(x)) {
    console.log("Not a number");
} else if(x%3===0 && x%5===0){
    console.log("FizzBuzz");
} else if(x%3===0){
    console.log("Fizz");
} else if(x%5===0){
    console.log("Buzz");
} else{
    console.log("input");
}
