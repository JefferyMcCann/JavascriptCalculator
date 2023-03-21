// learning javascript is going to be plenty fun, this is going to be a nice example with a 
// dynamic calculator 
let sym; 

function multipy(){
	sym = "x";
}



function calc(){
	
	let num1; 

	num1 = 1;  

	let num2;

	num2 = 2; 

	let num3;

	switch(sym) {
	case "+": 
		num3 = num1 + num2;
		console.log(num3); 
		document.write("your number is ");
		document.write(num3);
		break;  
	case "x": 
		num3 = num1 * num2; 
		console.log(num3);
		document.write("your number is "); // I need to figure out how to do input with buttons
		document.write(num3); 
		break;
	}
}
