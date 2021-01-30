export class ExcepcionOpinionNoExiste extends Error{
	constructor(){
		super();
		Object.setPrototypeOf(this, ExcepcionOpinionNoExiste.prototype);
	}
}
