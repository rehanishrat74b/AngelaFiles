var i =0;
var output=[];
for (i =1; i<=100;i++){
    FizzBuzz(i);
}

console.log(output);

function FizzBuzz(i) {
    if (i%3===0 && i%5===0){
        output.push("FizzBuzz");        
    }
    else if (i%3===0) {
        output.push("Fizz");        
    }
    else if (i%5===0){
        output.push("Buzz");        
    }
    else {
        output.push(i);
    }   
    
}