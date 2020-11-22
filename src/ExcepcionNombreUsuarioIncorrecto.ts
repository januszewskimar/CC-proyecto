export class ExcepcionNombreUsuarioIncorrecto extends Error{
	constructor(){
		super();
		Object.setPrototypeOf(this, ExcepcionNombreUsuarioIncorrecto.prototype);
	}
}
