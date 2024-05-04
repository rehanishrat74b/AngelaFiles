var numbers=[2,4,8];

function double(x){
    return x*2;
}
var nlist=numbers.map(double);
console.log(nlist); //it multiply each number by 2 and return a new array
//--------------------------

var numbers=[2,4,8];
var nlist= numbers.filter(function(x){
    return x>2
});
console.log(nlist); // it returns a new array > 2
//-----------------------------------
var numbers=[2,4,8];

var sum=numbers.reduce(function(gross,num){
    return gross+=num;
});
console.log(sum); // sum all the elements in an array
//-------------------------------------------
var numbers=[2,4,8];

var firstElementFound=numbers.find(function(num){
    return num >2;
});
console.log(firstElementFound); // it returns only 4
//--------------------------------------------
var numbers=[2,4,8];

var elementLocation=numbers.findIndex(function(num){
    return num >2;
});
console.log(elementLocation); // it returns 1 the index of first match
