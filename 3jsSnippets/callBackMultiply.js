function Square(number,callBack) {
    callBack(number * number);
}

var square1 =Square(2,function (square1) {
console.log(square1);
})