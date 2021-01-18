import { Opinion } from './Opinion';
import { RespuestaOpinion } from './RespuestaOpinion';
import { AdministradorTienda } from './AdministradorTienda';
import { Tienda } from './Tienda';
import { Usuario } from './Usuario';
import { ExcepcionNoHayOpiniones } from './ExcepcionNoHayOpiniones';
import { ExcepcionOpinionNoExiste } from './ExcepcionOpinionNoExiste';
import { ExcepcionRespuestaOpinionNoExiste } from './ExcepcionRespuestaOpinionNoExiste';


export class ControladorOpiniones{
	private opiniones: Opinion[] = [];
	
	constructor(){
	
	}
	
	addOpinion(op: Opinion){
		var id = -1;
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if (this.opiniones[i].getTienda().getNombre() == op.getTienda().getNombre()){
				if (this.opiniones[i].getId() > id){
					id = this.opiniones[i].getId();
				}
			}
		}
		op.setId(id + 1);
		this.opiniones.push(op);
	}
	
	publicarOpinion(nombreUsuario, tienda, titulo, valoracionNumerica, descripcion){
		var at: AdministradorTienda = new AdministradorTienda ("at1", "at1@tienda1.es", "Juan", "Delgado Sánchez");
		var t: Tienda = new Tienda (tienda, "Calle 123", "123456789", at);
		var u: Usuario = new Usuario (nombreUsuario, "abc@mail.es", "Marcos", "González Pérez");
		
		var o: Opinion = new Opinion(t, new Date(Date.now()), u, titulo, valoracionNumerica, descripcion);
		
		this.addOpinion(o);
	}
	
	publicarRespuesta(tienda: string, id: number, contenido: string) {
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if ( (this.opiniones[i].getTienda().getNombre() == tienda) && (this.opiniones[i].getId() == id) ){
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
	
	getOpinionesNombreTienda(n: String) : Opinion[]{
		let resultado: Opinion[] = [];
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if (this.opiniones[i].getTienda().getNombre() == n){
				resultado.push(this.opiniones[i]);
			}
		}
		return resultado;
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
	
	getValoracionMediaTienda(t: string) : number{
		let num = 0;
		let suma = 0;
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if (this.opiniones[i].getTienda().getNombre() == t){
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
	
	eliminarOpinion(tienda: string, id: number) : boolean{
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if ( (this.opiniones[i].getTienda().getNombre() == tienda) && (this.opiniones[i].getId() == id) ){
				this.opiniones.splice(i, 1);
				return true;
			}
		}
		return false;
	}
	
	eliminarRespuestaOpinion(tienda: string, id: number){
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if ( (this.opiniones[i].getTienda().getNombre() == tienda) && (this.opiniones[i].getId() == id) ){
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
