export class ExcepcionUsuarioYaExiste extends Error{
	constructor(){
		super();
		Object.setPrototypeOf(this, ExcepcionUsuarioYaExiste.prototype);
	}
}
