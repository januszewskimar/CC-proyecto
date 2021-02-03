import 'mocha';
import { ControladorOpiniones } from '../ControladorOpiniones';
import { Opinion } from '../../entidades/Opinion';
import { RespuestaOpinion } from '../../entidades/RespuestaOpinion';
import { ExcepcionNoHayOpiniones } from '../../excepciones/ExcepcionNoHayOpiniones';
import { ExcepcionOpinionNoExiste } from '../../excepciones/ExcepcionOpinionNoExiste';
import { ExcepcionRespuestaOpinionNoExiste } from '../../excepciones/ExcepcionRespuestaOpinionNoExiste';
import { expect } from 'chai';

describe('ControladorOpiniones', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(ControladorOpiniones, 'Cargado');
		})
	})
	
	describe('Devolver opiniones de una tienda determinada', function(){
		it('Devuelve opiniones correctas', function(){
			let controlador = new ControladorOpiniones();

			let op1 = new Opinion(1, new Date(Date.now()), "ana", "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			let op2 = new Opinion(2, new Date(Date.now()), "juan", "Muy mal", 1, "El producto llegó después de dos semanas");
			controlador.addOpinion(op2);
			
			let op3 = new Opinion(1, new Date(Date.now()), "belen", "Bien", 4, "No ha habido ningún problema");
			controlador.addOpinion(op3);
			let op4 = new Opinion(2, new Date(Date.now()), "alvaro", "Regular", 3, "El producto llegó defectuoso pero la devolución se ha gestionado rápidamente");
			controlador.addOpinion(op4);
			
			let resultado: Opinion[] = controlador.getOpinionesTienda(1);
			
			expect(resultado).to.have.lengthOf(2);
			expect(resultado).to.include(op1, op3);
		})
	})
	
	describe('Devolver valoración media de una tienda determinada', function(){
		it('Lanza un excepción si no hay opiniones sobre la tienda', function(){
			let controlador = new ControladorOpiniones();

			let op1 = new Opinion(1, new Date(Date.now()), "dani", "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			
			let op2 = new Opinion(2, new Date(Date.now()), "david", "Bien", 4, "No ha habido ningún problema");
			controlador.addOpinion(op2);
			
			expect(() => {controlador.getValoracionMediaTienda(3)}).to.throw(ExcepcionNoHayOpiniones);
		})
		
		it('Calcula bien la valoración media si hay opiniones sobre la tienda', function(){
			let controlador = new ControladorOpiniones();
			
			let op1 = new Opinion(1, new Date(Date.now()), "belen", "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			let op2 = new Opinion(2, new Date(Date.now()), "camilo", "Muy mal", 1, "El producto llegó después de dos semanas");
			controlador.addOpinion(op2);
			
			let op3 = new Opinion(1, new Date(Date.now()), "sofia", "Bien", 4, "No ha habido ningún problema");
			controlador.addOpinion(op3);
			let op4 = new Opinion(2, new Date(Date.now()), "lucas", "Regular", 3, "El producto llegó defectuoso pero la devolución se ha gestionado rápidamente");
			controlador.addOpinion(op4);
			
			
			expect(controlador.getValoracionMediaTienda(2)).to.equal((1+3)/2);
		})
	})
	
	describe('Eliminar una opinión', function(){
		it('Elimina una opinión de una tienda con un identificador determinado', function(){
			let controlador = new ControladorOpiniones();

			let op1 = new Opinion(1, new Date(Date.now()), "maria", "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			let op2 = new Opinion(2, new Date(Date.now()), "sara", "Muy mal", 1, "El producto llegó después de dos semanas");
			controlador.addOpinion(op2);
			
			let op3 = new Opinion(1, new Date(Date.now()), "paula", "Bien", 4, "No ha habido ningún problema");
			controlador.addOpinion(op3);
			let op4 = new Opinion(2, new Date(Date.now()), "claudia", "Regular", 3, "El producto llegó defectuoso pero la devolución se ha gestionado rápidamente");
			controlador.addOpinion(op4);
			
			expect(controlador.eliminarOpinion(2, 0)).to.equal(true);
			
			let resultado: Opinion[] = controlador.getOpinionesTienda(2);
			expect(resultado).to.have.lengthOf(1);
			expect(resultado).to.include(op4);
			
			resultado = controlador.getOpinionesTienda(1);
			expect(resultado).to.have.lengthOf(2);
			expect(resultado).to.include(op1, op3);
		})
		
		it('No elimina opiniones si se indica una combinación de tienda e identificador inexistentes', function(){
			let controlador = new ControladorOpiniones();

			let op1 = new Opinion(1, new Date(Date.now()), "marta", "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			let op2 = new Opinion(2, new Date(Date.now()), "irene", "Muy mal", 1, "El producto llegó después de dos semanas");
			controlador.addOpinion(op2);
			
			let op3 = new Opinion(1, new Date(Date.now()), "blanca", "Bien", 4, "No ha habido ningún problema");
			controlador.addOpinion(op3);
			let op4 = new Opinion(2, new Date(Date.now()), "lucia", "Regular", 3, "El producto llegó defectuoso pero la devolución se ha gestionado rápidamente");
			controlador.addOpinion(op4);
			
			expect(controlador.eliminarOpinion(1, 2)).to.equal(false);
			
			let resultado: Opinion[] = controlador.getOpinionesTienda(2);
			expect(resultado).to.have.lengthOf(2);
			expect(resultado).to.include(op2, op4);
			
			resultado = controlador.getOpinionesTienda(1);
			expect(resultado).to.have.lengthOf(2);
			expect(resultado).to.include(op1, op3);
		})
	})
	
	describe('Añadir una respuesta a una opinión', function(){
		it('Lanza una excepción si se indica una opinión que no existe', function(){
			let controlador = new ControladorOpiniones();

			let op1 = new Opinion(1, new Date(Date.now()), "ana", "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			
			expect(() => {controlador.publicarRespuesta(1, 1, "No estamos de acuerdo")}).to.throw(ExcepcionOpinionNoExiste);
		})
		
		it('Añade una respuesta si se indica una opinión que existe y no tiene agregada una respuesta', function(){
			let controlador = new ControladorOpiniones();

			let op1 = new Opinion(1, new Date(Date.now()), "belen", "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			
			controlador.publicarRespuesta(1, 0, "No estamos de acuerdo");
			
			expect(op1.tieneRespuesta()).to.equal(true);
			
			let r: RespuestaOpinion = op1.getRespuesta();
			
			expect(r.getOpinion()).to.equal(op1);
			expect(r.getContenido()).to.equal("No estamos de acuerdo");
		})
		
		it('Modifica una respuesta a una opinión si se indica una correcta', function(){
			let controlador = new ControladorOpiniones();

			let op1 = new Opinion(1, new Date(Date.now()), "sofia", "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			
			controlador.publicarRespuesta(1, 0, "No estamos de acuerdo");
			expect(op1.tieneRespuesta()).to.equal(true);
			
			controlador.publicarRespuesta(1, 0, "Perdón por los inconvenientes");
			expect(op1.tieneRespuesta()).to.equal(true);
			
			let r: RespuestaOpinion = op1.getRespuesta();
			expect(r.getOpinion()).to.equal(op1);
			expect(r.getContenido()).to.equal("Perdón por los inconvenientes");
		})
	})
	
	describe('Eliminar una respuesta a una opinión', function(){
		it('Lanza una excepción si se indica una opinión que no existe', function(){
			let controlador = new ControladorOpiniones();

			let op1 = new Opinion(1, new Date(Date.now()), "manuel", "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			
			controlador.publicarRespuesta(1, 0, "No estamos de acuerdo");
			
			expect(() => {controlador.eliminarRespuestaOpinion(1, 1)}).to.throw(ExcepcionOpinionNoExiste);
		})
		
		it('Lanza una excepción si se indica una opinión que existe y no tiene agregada una respuesta', function(){
			let controlador = new ControladorOpiniones();

			let op1 = new Opinion(1, new Date(Date.now()), "diego", "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			
			expect(() => {controlador.eliminarRespuestaOpinion(1, 0)}).to.throw(ExcepcionRespuestaOpinionNoExiste);
		})
		
		it('Elimina la respuesta a una opinión si se indica una opinión que existe y tiene agregada una respuesta', function(){
			let controlador = new ControladorOpiniones();

			let op1 = new Opinion(1, new Date(Date.now()), "arturo", "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			
			controlador.publicarRespuesta(1, 0, "No estamos de acuerdo");
			
			controlador.eliminarRespuestaOpinion(1, 0)
			expect(controlador.getOpinionesTienda(1)[0].tieneRespuesta()).to.equal(false);
		})
	})
})
