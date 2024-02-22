
function beer() {
    var bottles =100;
    var msg="";
while (bottles >0){
    msg=bottles + " bottles of beer on the wall " + bottles + " bottels of beer.\n";
    bottles--;
    msg = msg + " Take one down and pass it around, " + bottles + " of beer on the wall."
    console.log(msg);
    msg="";
}

}

beer();