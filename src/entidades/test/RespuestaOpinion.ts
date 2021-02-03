import 'mocha';
import {expect} from 'chai';
import  {Opinion} from '../Opinion'; 
import  {RespuestaOpinion} from '../RespuestaOpinion'; 

describe('RespuestaOpinion', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(RespuestaOpinion, 'Cargado');
		})
	})

	describe('Guarda correctamente', function(){
		it('Crea correctamente una respuesta a una opinión con datos correctos', function(){
			let fechaRespuestaOpinion = new Date(Date.now());
			let respuestaOpinion = new RespuestaOpinion(fechaRespuestaOpinion, "Gracias por su valoración");

			expect(respuestaOpinion.getFechaCreacion()).to.equal(fechaRespuestaOpinion);
			expect(respuestaOpinion.getContenido()).to.equal("Gracias por su valoración");
		})
	})
	
	describe('Se edita correctamente', function(){
		it('Edita correctamente el contenido', function(){
			let fechaCreacionRespuestaOpinion = new Date(Date.now());
			let respuestaOpinion = new RespuestaOpinion(fechaCreacionRespuestaOpinion, "Gracias por su valoración");
			
			let fechaEdicionRespuestaOpinion = new Date(Date.now());
			respuestaOpinion.setContenido("Muchas gracias!");
			respuestaOpinion.setFechaEdicion(fechaEdicionRespuestaOpinion);
			
			expect(respuestaOpinion.getFechaCreacion()).to.equal(fechaCreacionRespuestaOpinion);
			expect(respuestaOpinion.getFechaEdicion()).to.equal(fechaEdicionRespuestaOpinion);
			expect(respuestaOpinion.getContenido()).to.equal("Muchas gracias!");
		})
	})
})
