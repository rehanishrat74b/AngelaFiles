var names=["Angela","Ben","Jenny","Michael","Chloe"];
function whoIsPaying(names){
    var numberOfPeople=names.length;
    var index = Math.random() * numberOfPeople ;
    index=Math.floor(index);
    return names[index];
}
console.log(whoIsPaying(names) + " is going to buy lunch today!");