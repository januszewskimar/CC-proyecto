export class ExcepcionNoHayOpiniones extends Error{
	constructor(){
		super();
		Object.setPrototypeOf(this, ExcepcionNoHayOpiniones.prototype);
	}
}
