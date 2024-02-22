function Display(params) {
    console.log(params);
    alert (params);
}
function Square(number,myCallBack) {
    myCallBack( number * number);
}
Square(4,Display);
