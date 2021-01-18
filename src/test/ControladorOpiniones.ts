import 'mocha';
import {ControladorOpiniones} from '../ControladorOpiniones';
import {AdministradorTienda} from '../AdministradorTienda';
import {Tienda} from '../Tienda'; 
import {Usuario} from '../Usuario';
import {Opinion} from '../Opinion';
import {RespuestaOpinion} from '../RespuestaOpinion';
import {ExcepcionNoHayOpiniones} from '../ExcepcionNoHayOpiniones';
import {ExcepcionOpinionNoExiste} from '../ExcepcionOpinionNoExiste';
import {expect} from 'chai';

describe('ControladorOpiniones', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(ControladorOpiniones, 'Cargado');
		})
	})
	
	describe('Devolver opiniones de una tienda determinada', function(){
		it('Devuelve opiniones correctas', function(){
			let controlador = new ControladorOpiniones();
			
			let adt1 = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let t1 = new Tienda("Tienda1", "Calle A 1A", "123456789", adt1);
			adt1.setTienda(t1);
			
			let adt2 = new AdministradorTienda("juanfer", "juanfer@correo.es", "Juan", "Fernández");
			let t2: Tienda = new Tienda("Tienda2", "Calle B 1B", "987654321", adt2);
			adt2.setTienda(t2);
			
			let u1 = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			let u2 = new Usuario("carmad", "carmad@correo.es", "Carolina", "Madrid");
			
			let op1 = new Opinion(t1, new Date(Date.now()), u1, "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			let op2 = new Opinion(t2, new Date(Date.now()), u1, "Muy mal", 1, "El producto llegó después de dos semanas");
			controlador.addOpinion(op2);
			
			let op3 = new Opinion(t1, new Date(Date.now()), u2, "Bien", 4, "No ha habido ningún problema");
			controlador.addOpinion(op3);
			let op4 = new Opinion(t2, new Date(Date.now()), u2, "Regular", 3, "El producto llegó defectuoso pero la devolución se ha gestionado rápidamente");
			controlador.addOpinion(op4);
			
			let resultado: Opinion[] = controlador.getOpiniones(t1);
			
			expect(resultado).to.have.lengthOf(2);
			expect(resultado).to.include(op1, op3);
		})
	})
	
	describe('Devolver valoración media de una tienda determinada', function(){
		it('Lanza un excepción si no hay opiniones sobre la tienda', function(){
			let controlador = new ControladorOpiniones();
			
			let adt1 = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let t1 = new Tienda("Tienda1", "Calle A 1A", "123456789", adt1);
			adt1.setTienda(t1);
			
			let adt2 = new AdministradorTienda("juanfer", "juanfer@correo.es", "Juan", "Fernández");
			let t2: Tienda = new Tienda("Tienda2", "Calle B 1B", "987654321", adt2);
			adt2.setTienda(t2);
			
			let u1 = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			let u2 = new Usuario("carmad", "carmad@correo.es", "Carolina", "Madrid");
			
			let op1 = new Opinion(t1, new Date(Date.now()), u1, "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			
			let op2 = new Opinion(t1, new Date(Date.now()), u2, "Bien", 4, "No ha habido ningún problema");
			controlador.addOpinion(op2);
			
			expect(() => {controlador.getValoracionMediaTienda(t2.getNombre())}).to.throw(ExcepcionNoHayOpiniones);
		})
		
		it('Calcula bien la valoración media si hay opiniones sobre la tienda', function(){
			let controlador = new ControladorOpiniones();
			
			let adt1 = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let t1 = new Tienda("Tienda1", "Calle A 1A", "123456789", adt1);
			adt1.setTienda(t1);
			
			let adt2 = new AdministradorTienda("juanfer", "juanfer@correo.es", "Juan", "Fernández");
			let t2: Tienda = new Tienda("Tienda2", "Calle B 1B", "987654321", adt2);
			adt2.setTienda(t2);
			
			let u1 = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			let u2 = new Usuario("carmad", "carmad@correo.es", "Carolina", "Madrid");
			
			let op1 = new Opinion(t1, new Date(Date.now()), u1, "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			let op2 = new Opinion(t2, new Date(Date.now()), u1, "Muy mal", 1, "El producto llegó después de dos semanas");
			controlador.addOpinion(op2);
			
			let op3 = new Opinion(t1, new Date(Date.now()), u2, "Bien", 4, "No ha habido ningún problema");
			controlador.addOpinion(op3);
			let op4 = new Opinion(t2, new Date(Date.now()), u2, "Regular", 3, "El producto llegó defectuoso pero la devolución se ha gestionado rápidamente");
			controlador.addOpinion(op4);
			
			
			expect(controlador.getValoracionMediaTienda(t2.getNombre())).to.equal((1+3)/2);
		})
	})
	
	describe('Eliminar una opinión', function(){
		it('Elimina una opinión de una tienda con un identificador determinado', function(){
			let controlador = new ControladorOpiniones();
			
			let adt1 = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let t1 = new Tienda("Tienda1", "Calle A 1A", "123456789", adt1);
			adt1.setTienda(t1);
			
			let adt2 = new AdministradorTienda("juanfer", "juanfer@correo.es", "Juan", "Fernández");
			let t2: Tienda = new Tienda("Tienda2", "Calle B 1B", "987654321", adt2);
			adt2.setTienda(t2);
			
			let u1 = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			let u2 = new Usuario("carmad", "carmad@correo.es", "Carolina", "Madrid");
			
			let op1 = new Opinion(t1, new Date(Date.now()), u1, "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			let op2 = new Opinion(t2, new Date(Date.now()), u1, "Muy mal", 1, "El producto llegó después de dos semanas");
			controlador.addOpinion(op2);
			
			let op3 = new Opinion(t1, new Date(Date.now()), u2, "Bien", 4, "No ha habido ningún problema");
			controlador.addOpinion(op3);
			let op4 = new Opinion(t2, new Date(Date.now()), u2, "Regular", 3, "El producto llegó defectuoso pero la devolución se ha gestionado rápidamente");
			controlador.addOpinion(op4);
			
			expect(controlador.eliminarOpinion(t2.getNombre(), 0)).to.equal(true);
			
			let resultado: Opinion[] = controlador.getOpiniones(t2);
			expect(resultado).to.have.lengthOf(1);
			expect(resultado).to.include(op4);
			
			resultado = controlador.getOpiniones(t1);
			expect(resultado).to.have.lengthOf(2);
			expect(resultado).to.include(op1, op3);
		})
		
		it('No elimina opiniones si se indica una combinación de tienda e identificador inexistentes', function(){
			let controlador = new ControladorOpiniones();
			
			let adt1 = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let t1 = new Tienda("Tienda1", "Calle A 1A", "123456789", adt1);
			adt1.setTienda(t1);
			
			let adt2 = new AdministradorTienda("juanfer", "juanfer@correo.es", "Juan", "Fernández");
			let t2: Tienda = new Tienda("Tienda2", "Calle B 1B", "987654321", adt2);
			adt2.setTienda(t2);
			
			let u1 = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			let u2 = new Usuario("carmad", "carmad@correo.es", "Carolina", "Madrid");
			
			let op1 = new Opinion(t1, new Date(Date.now()), u1, "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			let op2 = new Opinion(t2, new Date(Date.now()), u1, "Muy mal", 1, "El producto llegó después de dos semanas");
			controlador.addOpinion(op2);
			
			let op3 = new Opinion(t1, new Date(Date.now()), u2, "Bien", 4, "No ha habido ningún problema");
			controlador.addOpinion(op3);
			let op4 = new Opinion(t2, new Date(Date.now()), u2, "Regular", 3, "El producto llegó defectuoso pero la devolución se ha gestionado rápidamente");
			controlador.addOpinion(op4);
			
			expect(controlador.eliminarOpinion(t1.getNombre(), 2)).to.equal(false);
			
			let resultado: Opinion[] = controlador.getOpiniones(t2);
			expect(resultado).to.have.lengthOf(2);
			expect(resultado).to.include(op2, op4);
			
			resultado = controlador.getOpiniones(t1);
			expect(resultado).to.have.lengthOf(2);
			expect(resultado).to.include(op1, op3);
		})
	})
	
	describe('Añadir una respuesta a una opinión', function(){
		it('Lanza una excepción si se indica una opinión que no existe', function(){
			let controlador = new ControladorOpiniones();
			
			let adt1 = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let t1 = new Tienda("Tienda1", "Calle A 1A", "123456789", adt1);
			adt1.setTienda(t1);
			
			let u1 = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			
			let op1 = new Opinion(t1, new Date(Date.now()), u1, "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			
			expect(() => {controlador.publicarRespuesta("Tienda1", 1, "No estamos de acuerdo")}).to.throw(ExcepcionOpinionNoExiste);
		})
		
		it('Añade una respuesta si se indica una opinión que existe y no tiene agregada una respuesta', function(){
			let controlador = new ControladorOpiniones();
			
			let adt1 = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let t1 = new Tienda("Tienda1", "Calle A 1A", "123456789", adt1);
			adt1.setTienda(t1);
			
			let u1 = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			
			let op1 = new Opinion(t1, new Date(Date.now()), u1, "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			
			controlador.publicarRespuesta("Tienda1", 0, "No estamos de acuerdo");
			
			expect(op1.tieneRespuesta()).to.equal(true);
			
			let r: RespuestaOpinion = op1.getRespuesta();
			
			expect(r.getOpinion()).to.equal(op1);
			expect(r.getContenido()).to.equal("No estamos de acuerdo");
		})
		
		it('Modifica una respuesta a una opinión si se indica una correcta', function(){
			let controlador = new ControladorOpiniones();
			
			let adt1 = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let t1 = new Tienda("Tienda1", "Calle A 1A", "123456789", adt1);
			adt1.setTienda(t1);
			
			let u1 = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			
			let op1 = new Opinion(t1, new Date(Date.now()), u1, "Todo correcto", 5, "La entrega ha sido rápida");
			controlador.addOpinion(op1);
			
			controlador.publicarRespuesta("Tienda1", 0, "No estamos de acuerdo");
			expect(op1.tieneRespuesta()).to.equal(true);
			
			controlador.publicarRespuesta("Tienda1", 0, "Perdón por los inconvenientes");
			expect(op1.tieneRespuesta()).to.equal(true);
			
			let r: RespuestaOpinion = op1.getRespuesta();
			expect(r.getOpinion()).to.equal(op1);
			expect(r.getContenido()).to.equal("Perdón por los inconvenientes");
		})
	})
})
