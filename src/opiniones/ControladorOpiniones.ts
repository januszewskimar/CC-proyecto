import { Collection } from 'mongodb';
import { Opinion } from '../entidades/Opinion';
import { RespuestaOpinion } from '../entidades/RespuestaOpinion';
import { ExcepcionNoHayOpiniones } from '../excepciones/ExcepcionNoHayOpiniones';
import { ExcepcionOpinionNoExiste } from '../excepciones/ExcepcionOpinionNoExiste';
import { ExcepcionRespuestaOpinionNoExiste } from '../excepciones/ExcepcionRespuestaOpinionNoExiste';


export class ControladorOpiniones{
	private opiniones: Opinion[] = [];
	private coleccion: Collection;
	
	constructor(){
	
	}
	
	setColeccion(coleccion: Collection) : void{
		this.coleccion = coleccion;
	}
	
	addOpinionLocal(op: Opinion) : void {
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
	
	async publicarOpinion(nombreUsuario: string, tienda: number, titulo: string, valoracionNumerica: number, descripcion: string): Promise<Opinion> {
		var op: Opinion = new Opinion(tienda, new Date(Date.now()), nombreUsuario, titulo, valoracionNumerica, descripcion);
		if (this.coleccion == null){
			this.addOpinionLocal(op);
		}
		else{
			var res = await this.coleccion.find( { "tienda" : op.getTienda() }).sort( { "id": -1 } ).limit(1).toArray();
			var id;
			if (res.length == 0){
				id = 0;
			}
			else{
				id = res[0].id + 1;
			}
			op.setId(id);
			await this.coleccion.insertOne(op);
		}
		return op;
	}
	
	async publicarRespuesta(tienda: number, id: number, contenido: string): Promise<RespuestaOpinion> {
		if (this.coleccion == null){
			return this.publicarRespuestaLocal(tienda, id, contenido);
		}
		else{
			var res = await this.coleccion.findOne( { "tienda": tienda, "id": id } );
			if (res){
				var r;
				var op = Opinion.deserialize(res);
				if (op.tieneRespuesta){
					op.getRespuesta().setContenido(contenido);
					r = op.getRespuesta();
				}
				else{
					r = new RespuestaOpinion (new Date(Date.now()), contenido);
					op.setRespuesta(r);
				}
				await this.coleccion.findOneAndReplace( { "tienda": tienda, "id": id }, op);
				return r;
			}
			else{
				throw new ExcepcionOpinionNoExiste();
			}
		}
	}
	
	publicarRespuestaLocal(tienda: number, id: number, contenido: string): RespuestaOpinion {
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if ( (this.opiniones[i].getTienda() == tienda) && (this.opiniones[i].getId() == id) ){
				var op = this.opiniones[i];
				if (op.tieneRespuesta()){
					op.getRespuesta().setContenido(contenido);
				}
				else{
					var r: RespuestaOpinion = new RespuestaOpinion (new Date(Date.now()), contenido);
					op.setRespuesta(r);
				}
				return op.getRespuesta();
			}
		}
		throw new ExcepcionOpinionNoExiste();
	}
	
	async getOpinionesTienda(t: number) : Promise<Opinion[]> {
		if (this.coleccion == null){
			return this.getOpinionesTiendaLocal(t);
		}
		else{
			var res = await this.coleccion.find( { "tienda": t } ).toArray();
			var opiniones: Opinion[] = [];
			for (let i = 0 ; i < res.length ; i++){
				opiniones.push(Opinion.deserialize(res[i]));
			}
			return opiniones;
		}
	}
	
	getOpinionesTiendaLocal(t: number) : Opinion[] {
		let resultado: Opinion[] = [];
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if (this.opiniones[i].getTienda() == t){
				resultado.push(this.opiniones[i]);
			}
		}
		return resultado;
	}
	
	async getValoracionMediaTienda(t: number) : Promise<number> {
		if (this.coleccion == null){
			return this.getValoracionMediaTiendaLocal(t);
		}
		else{
			var res = await this.coleccion.find( { "tienda": t } ).toArray();
			
			if (res.length == 0){
				throw new ExcepcionNoHayOpiniones();
			}
			else{
				let suma = 0;
				for (let i = 0 ; i < res.length ; i++){
					suma += parseInt(res[i]['valoracionNumerica']);
				}
				
				return suma / res.length;
			}
		}
	
	}
	
	getValoracionMediaTiendaLocal(t: number) : number {
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
	
	async eliminarOpinion(tienda: number, id: number) : Promise<boolean> {
		if (this.coleccion == null){
			return this.eliminarOpinionLocal(tienda, id);
		}
		else{
			var res = await this.coleccion.deleteOne( { "tienda": tienda, "id": id } );
			if (res.deletedCount == 1){
				return true;
			}
			else{
				return false;
			}
		}
	}
	
	eliminarOpinionLocal(tienda: number, id: number) : boolean {
		for (let i = 0 ; i < this.opiniones.length ; i++){
			if ( (this.opiniones[i].getTienda() == tienda) && (this.opiniones[i].getId() == id) ){
				this.opiniones.splice(i, 1);
				return true;
			}
		}
		return false;
	}
	
	async eliminarRespuestaOpinion(tienda: number, id: number)  : Promise<void>  {
		if (this.coleccion == null){
			return this.eliminarRespuestaOpinionLocal(tienda, id);
		}
		else{
			var res = await this.coleccion.findOne( { "tienda": tienda, "id": id } );
			
			if (!res){
				throw new ExcepcionOpinionNoExiste();
			}
			else{
				var op = Opinion.deserialize(res);
				if (!op.tieneRespuesta()){
					throw new ExcepcionRespuestaOpinionNoExiste();
				}
				else{
					op.setRespuesta(null);
					await this.coleccion.replaceOne( { "tienda": tienda, "id": id }, op );
				}
			}
		}
	}
	
	eliminarRespuestaOpinionLocal(tienda: number, id: number) : void{
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
