import { Opinion } from './Opinion';
import { Tienda } from './Tienda';

export class OpinionesControlador{
	private opiniones: Opinion[] = [];
	
	constructor(){

	}
	
	addOpinion(op: Opinion){
		this.opiniones.push(op);
	}
	
	getOpiniones(t: Tienda) : Opinion[]{
		let resultado: Opinion[] = [];
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if (this.opiniones[i].getTienda() == t){
				resultado.push(this.opiniones[i]);
			}
		}
		return resultado;
	}
}
