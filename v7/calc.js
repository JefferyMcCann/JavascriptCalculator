// learning javascript is going to be plenty fun, this is going to be a nice example with a 
// dynamic calculator 

let sym;

let anws; 

let i; 

let num1, num2; 

let Num = ""; 

let Num1, Num2, Num3, Num4, Num5, Num6, Num7, Num8, Num9, Num0;  

let a; 

let Numm = "";

a = 1; 

function Number1(){

	if(a == 1){

	Num1 = "1"; 

	Num += Num1;

	console.log(Num);
	
	}

	if(a == 2){
		
		Num1 = "1";

		Numm += Num1;

		console.log(Numm);
	}

}

function Number2(){

	if(a == 1){

	Num2 = "2"; 

	Num += Num2;

	console.log(Num);
	
	}

	if(a == 2){
		
		Num2 = "2";

		Numm += Num2;

		console.log(Numm);
	}

}

function Number3(){

	if(a == 1){

	Num3 = "3"; 

	Num += Num3;

	console.log(Num);
	
	}

	if(a == 2){
		
		Num3 = "3";

		Numm += Num3;

		console.log(Numm);
	}

}

function Number4(){

	if(a == 1){

	Num4 = "4"; 

	Num += Num4;

	console.log(Num);
	
	}

	if(a == 2){
		
		Num4 = "4";

		Numm += Num4;

		console.log(Numm);
	}

}

function Number5(){

	if(a == 1){

	Num5 = "5"; 

	Num += Num5;

	console.log(Num);
	
	}

	if(a == 2){
		
		Num5 = "5";

		Numm += Num5;

		console.log(Numm);
	}

}

function Number6(){

	if(a == 1){

	Num6 = "6"; 

	Num += Num6;

	console.log(Num);
	
	}

	if(a == 2){
		
		Num6 = "6";

		Numm += Num6;

		console.log(Numm);
	}

}

function Number7(){

	if(a == 1){

	Num7 = "7"; 

	Num += Num7;

	console.log(Num);
	
	}

	if(a == 2){
		
		Num7 = "7";

		Numm += Num7;

		console.log(Numm);
	}

}

function Number8(){

	if(a == 1){

	Num8 = "8"; 

	Num += Num8;

	console.log(Num);
	
	}

	if(a == 2){
		
		Num8 = "8";

		Numm += Num8;

		console.log(Numm);
	}

}

function Number9(){

if(a == 1){

	Num9 = "9"; 

	Num += Num9;

	console.log(Num);
	
	}

	if(a == 2){
		
		Num9 = "9";

		Numm += Num9;

		console.log(Numm);
	}

}

function Number0(){

if(a == 1){

	Num0 = "0"; 

	Num += Num0;

	console.log(Num);
	
	}

	if(a == 2){
		
		Num0 = "0";

		Numm += Num0;

		console.log(Numm);
	}

}

function number1(){

	num1 = Number(Num); 

	console.log(num1);

}

function number2(){

	num2 = Number(Numm); 

	console.log(num2);

}

function multipy(){
	sym = "x";

	a += 1;

	console.log(a);
}

function add(){
	sym = "+";

	a += 1; 

	console.log(a);
}

function subtract(){
	sym = "-"; 

	a += 1; 

	console.log(a);
}

function wash(){ // "washes"/clears the anwser
	sym = "c";
	num1 = 0; 
	num2 = 0; 
	Num = ""; 
	Numm = "";
	a = 1;
	calc();
}

function calc(){ 

	if(a < 3){

	number1();

	number2();
	
	}

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
	case "-": 
		num3 = num1 - num2;
		anws = num3; 
		document.getElementById("anws").innerHTML = anws;
	}
}
