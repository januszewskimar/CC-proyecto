export class ExcepcionTelefonoIncorrecto extends Error{
	constructor(){
		super();
		Object.setPrototypeOf(this, ExcepcionTelefonoIncorrecto.prototype);
	}
}
