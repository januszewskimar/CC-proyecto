export class ExcepcionCorreoIncorrecto extends Error{
	constructor(){
		super();
		Object.setPrototypeOf(this, ExcepcionCorreoIncorrecto.prototype);
	}
}
