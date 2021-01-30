import 'mocha';
import  {AdministradorTienda} from '../AdministradorTienda'; 
import  {ExcepcionNombreUsuarioIncorrecto} from '../../excepciones/ExcepcionNombreUsuarioIncorrecto'; 
import  {ExcepcionCorreoIncorrecto} from '../../excepciones/ExcepcionCorreoIncorrecto'; 
import {expect} from 'chai';

describe('AdministradorTienda', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(AdministradorTienda, 'Cargado');
		})
	})
	
	describe('Correo electrónico', function(){
		it('Lanza una excepción si no contiene arrobas', function(){
			expect(() => {new AdministradorTienda('nombreUsuario', 'correodireccion.es', 'Ana', 'García')}).to.throw(ExcepcionCorreoIncorrecto);
		})
		
		it('Lanza una excepción si contiene más de una arroba', function(){
			expect(() => {new AdministradorTienda('nombreUsuario', 'co@r@reo.es', 'Ana', 'García')}).to.throw(ExcepcionCorreoIncorrecto);
			expect(() => {new AdministradorTienda('nombreUsuario', 'co@r@r@eo.es', 'Ana', 'García')}).to.throw(ExcepcionCorreoIncorrecto);
		})
		
		it('Lanza una excepción si hay una arroba al principio', function(){
			expect(() => {new AdministradorTienda('nombreUsuario', '@correo.direccion.es', 'Ana', 'García')}).to.throw(ExcepcionCorreoIncorrecto);
		})
		
		it('Lanza una excepción si hay una arroba al final', function(){
			expect(() => {new AdministradorTienda('nombreUsuario', 'correo.direccion.es@', 'Ana', 'García')}).to.throw(ExcepcionCorreoIncorrecto);
		})
		
		it('Lanza una excepción si contiene un espacio', function(){
			expect(() => {new AdministradorTienda('nombreUsuario', 'correo @direccion.es', 'Ana', 'García')}).to.throw(ExcepcionCorreoIncorrecto);
		})
	})
	
	describe('Nombre de usuario', function(){
		it('Lanza una excepción si contiene un espacio', function(){
			expect(() => {new AdministradorTienda('nombre usuario', 'usuario@correo.es', 'Ana', 'García')}).to.throw(ExcepcionNombreUsuarioIncorrecto);
		})
		
		it('Lanza una excepción si contiene un carácter especial no permitido', function(){
			expect(() => {new AdministradorTienda('nombre*usuario', 'usuario@correo.es', 'Ana', 'García')}).to.throw(ExcepcionNombreUsuarioIncorrecto);
		})
		
		it('Lanza una excepción si está vacío', function(){
			expect(() => {new AdministradorTienda('', 'usuario@correo.es', 'Ana', 'García')}).to.throw(ExcepcionNombreUsuarioIncorrecto);
		})

	})
	
	describe('Guarda correctamente', function(){
		it('Crea correctamente un administrador con datos correctos', function(){
			let administrador = new AdministradorTienda('nombreUsuario', 'usuario@correo.es', 'Ana', 'García');
			
			expect(administrador.getNombreUsuario()).to.equal('nombreUsuario');
			expect(administrador.getCorreo()).to.equal('usuario@correo.es');
			expect(administrador.getNombre()).to.equal('Ana');
			expect(administrador.getApellidos()).to.equal('García');
		})
	})
	
	
})
