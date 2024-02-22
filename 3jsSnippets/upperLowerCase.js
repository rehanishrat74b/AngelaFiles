var name = prompt("What is your name");
var firstChr=name.slice(0,1);
firstChr=firstChr.toUpperCase();
var nameChunk=name.slice(1,name.length);
nameChunk=nameChunk.toLowerCase();

alert("Hello! " + firstChr + nameChunk);