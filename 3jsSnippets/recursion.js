function Fictorial(number) {

    if (number <2) {
        return 1;
    }
    return number * Fictorial(number-1);
}

console.log(Fictorial(4));