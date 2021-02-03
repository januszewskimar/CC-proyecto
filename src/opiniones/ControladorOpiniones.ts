import { Opinion } from '../entidades/Opinion';
import { RespuestaOpinion } from '../entidades/RespuestaOpinion';
import { ExcepcionNoHayOpiniones } from '../excepciones/ExcepcionNoHayOpiniones';
import { ExcepcionOpinionNoExiste } from '../excepciones/ExcepcionOpinionNoExiste';
import { ExcepcionRespuestaOpinionNoExiste } from '../excepciones/ExcepcionRespuestaOpinionNoExiste';


export class ControladorOpiniones{
	private opiniones: Opinion[] = [];
	
	constructor(){
	
	}
	
	addOpinion(op: Opinion){
		var id = -1;
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if (this.opiniones[i].getTienda() == op.getTienda()){
				if (this.opiniones[i].getId() > id){
					id = this.opiniones[i].getId();
				}
			}
		}
		op.setId(id + 1);
		this.opiniones.push(op);
	}
	
	publicarOpinion(nombreUsuario: string, tienda: number, titulo: string, valoracionNumerica: number, descripcion: string){
		var o: Opinion = new Opinion(tienda, new Date(Date.now()), nombreUsuario, titulo, valoracionNumerica, descripcion);
		
		this.addOpinion(o);
	}
	
	publicarRespuesta(tienda: number, id: number, contenido: string) {
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if ( (this.opiniones[i].getTienda() == tienda) && (this.opiniones[i].getId() == id) ){
				var op = this.opiniones[i];
				if (op.tieneRespuesta()){
					op.getRespuesta().setContenido(contenido);
				}
				else{
					var r: RespuestaOpinion = new RespuestaOpinion (op, new Date(Date.now()), contenido);
					op.setRespuesta(r);
				}
				return;
			}
		}
		throw new ExcepcionOpinionNoExiste();
	}
	
	getOpinionesTienda(t: number) : Opinion[]{
		let resultado: Opinion[] = [];
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if (this.opiniones[i].getTienda() == t){
				resultado.push(this.opiniones[i]);
			}
		}
		return resultado;
	}
	
	getValoracionMediaTienda(t: number) : number{
		let num = 0;
		let suma = 0;
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if (this.opiniones[i].getTienda() == t){
				num++;
				suma += this.opiniones[i].getValoracionNumerica();
			}
		}
		
		if (num == 0){
			throw new ExcepcionNoHayOpiniones();
		}
		else{
			return suma / num;
		}
	}
	
	eliminarOpinion(tienda: number, id: number) : boolean{
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if ( (this.opiniones[i].getTienda() == tienda) && (this.opiniones[i].getId() == id) ){
				this.opiniones.splice(i, 1);
				return true;
			}
		}
		return false;
	}
	
	eliminarRespuestaOpinion(tienda: number, id: number){
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if ( (this.opiniones[i].getTienda() == tienda) && (this.opiniones[i].getId() == id) ){
				let op = this.opiniones[i];
				if (op.tieneRespuesta()){
					op.eliminarRespuesta();
					return;
				}
				else{
					throw new ExcepcionRespuestaOpinionNoExiste();
				}
			}
		}
		throw new ExcepcionOpinionNoExiste();
	}
}
