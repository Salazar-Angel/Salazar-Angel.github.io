//biblioteca.js

//1,1,2,3,5,8,13,21,34,55

function fibonacci(numTermino){
	const term1 = 1;
	const term2 = 1;

	if (numTermino == 1)
		return "1"
	else if (numTermino ==2)
			return "1,1"
		else {
				let cadFibonacci = "1,1";
				let termActual = term2;
				let termAnterior = 1;
				let termAuxiliar = termActual;
				for (let term = 3; term <= numTermino; term++){
					termAuxiliar = termActual;
					termActual = termActual + termAnterior;
					termAnterior = termAuxiliar;
					cadFibonacci += "," + termActual;
				}
				return cadFibonacci;
			}
}

//Función como expresión
const usaFibonacci = function(n){
	return fibonacci(n);
}

//función flecha
const arrowFibonacci = (n)=>{
	return fibonacci(n);
};

//Función como objeto
const objetoFibonacci = new Function('n', "return fibonacci(n)");//biblioteca.js

//1,1,2,3,5,8,13,21,34,55

function fibonacci(numTermino){
	const term1 = 1;
	const term2 = 1;

	if (numTermino == 1)
		return "1"
	else if (numTermino ==2)
			return "1,1"
		else {
				let cadFibonacci = "1,1";
				let termActual = term2;
				let termAnterior = 1;
				let termAuxiliar = termActual;
				for (let term = 3; term <= numTermino; term++){
					termAuxiliar = termActual;
					termActual = termActual + termAnterior;
					termAnterior = termAuxiliar;
					cadFibonacci += "," + termActual;
				}
				return cadFibonacci;
			}
}

//Función como expresión
const usaFibonacci = function(n){
	return fibonacci(n);
}

//función flecha
const arrowFibonacci = (n)=>{
	return fibonacci(n);
};

//Función como objeto
const objetoFibonacci = new Function('n', "return fibonacci(n)");