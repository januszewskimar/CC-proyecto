import 'mocha';
import  {ControladorOpiniones} from '../ControladorOpiniones';
import  {AdministradorTienda} from '../AdministradorTienda';
import  {Tienda} from '../Tienda'; 
import  {Usuario} from '../Usuario';
import  {Opinion} from '../Opinion';
import  {ExcepcionNoHayOpiniones} from '../ExcepcionNoHayOpiniones';
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
			
			expect(() => {controlador.getValoracionMediaTienda(t2)}).to.throw(ExcepcionNoHayOpiniones);
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
			
			
			expect(controlador.getValoracionMediaTienda(t2)).to.equal((1+3)/2);
		})
	})
})
