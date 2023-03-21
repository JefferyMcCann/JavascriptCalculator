// learning javascript is going to be plenty fun, this is going to be a nice example with a 
// dynamic calculator 

let sym;

let anws; 

let i; 

let num1, num2; 

let Num = ""; 

let Num1, Num2, Num3, Num4, Num5, Num6, Num7, Num8, Num9, Num0; 

function Number1(){

	Num1 = "1"; 

	Num += Num1;

	console.log(Num);

}

function Number2(){

	Num2 = "2"; 

	Num += Num2;

	console.log(Num);

}

function Number3(){

	Num3 = "3"; 

	Num += Num3;

	console.log(Num);

}

function Number4(){

	Num4 = "4"; 

	Num += Num4;

	console.log(Num);

}

function Number5(){

	Num5 = "5"; 

	Num += Num5;

	console.log(Num);

}

function Number6(){

	Num6 = "6"; 

	Num += Num6;

	console.log(Num);

}

function Number7(){

	Num7 = "7"; 

	Num += Num7;

	console.log(Num);

}

function Number8(){

	Num8 = "8"; 

	Num += Num8;

	console.log(Num);

}

function Number9(){

	Num9 = "9"; 

	Num += Num9;

	console.log(Num);

}

function Number0(){

	Num0 = "0"; 

	Num += Num0;

	console.log(Num);

}

function number1(){

	num1 = Number(Num); 

	console.log(num1);	
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
	num1 = 0; 
	num2 = 0; 
	Num = ""; 
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
