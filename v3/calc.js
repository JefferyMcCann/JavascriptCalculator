// learning javascript is going to be plenty fun, this is going to be a nice example with a 
// dynamic calculator 

let sym;

let anws; 

let i; 

let num1; 

let num2;

function number1(){
	num1 = 69;
}

function number2(){
	num2 = 420;
}

function multipy(){
	sym = "x";
}

function add(){
	sym = "+";
}

function wash(){ // "washes"/clears the anwser
	sym = "c";
	calc();
}

function calc(){ 

	number1();

	number2();

	let num3;

	switch(sym) {
	case "+": 
		num3 = num1 + num2;
		awns = num3;
		document.getElementById("anws").innerHTML = awns;
		break;  
	case "x": 
		num3 = num1 * num2; 
		anws = num3;
		document.getElementById("anws").innerHTML = anws;
		break;
	case "c":
		anws = 0; 
		document.getElementById("anws").innerHTML = anws;
		break;
	}
}
