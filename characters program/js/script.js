var ch = prompt("Enter the character");


if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))
	console.log ("The Given Character is a Letter"); 
 
else if (ch >= "0" && ch <= "9")
	console.log  ("The Given Character is a Number");


else
	console.log("The Given Character is a Special Character");