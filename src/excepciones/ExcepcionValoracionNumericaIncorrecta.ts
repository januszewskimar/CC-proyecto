export class ExcepcionValoracionNumericaIncorrecta extends Error{
	constructor(){
		super();
		Object.setPrototypeOf(this, ExcepcionValoracionNumericaIncorrecta.prototype);
	}
}
