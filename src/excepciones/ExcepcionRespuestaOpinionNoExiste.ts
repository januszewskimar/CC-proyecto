export class ExcepcionRespuestaOpinionNoExiste extends Error{
	constructor(){
		super();
		Object.setPrototypeOf(this, ExcepcionRespuestaOpinionNoExiste.prototype);
	}
}
