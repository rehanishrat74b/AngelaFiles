var charCount=185;
var para = prompt("Describe yourself:");
var msg ="You have written " + para.length + " characters. You are left with " + (charCount - para.length) + " characters";
alert(msg);