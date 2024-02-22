var sequence=[];
function fibonaccinumber(n){
    var i=0;
    var j=0;
    while (i<n) {

        if (i===0 || i===1){
            sequence.push(i);
            
        } else {
            
            j=sequence[i-1] + sequence[i-2];            
            sequence.push(j);            
            
        }
          i=i+1;
        
    }
    
    return sequence;
}

fibonaccinumber(6);