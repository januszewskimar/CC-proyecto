import 'mocha';
import  {AdministradorTienda} from '../AdministradorTienda'; 
import {expect} from 'chai';

describe('AdministradorTienda', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(AdministradorTienda, 'Cargado');
		})
	})
	
	describe('Correo electrónico', function(){
		it('Lanza una excepción si no contiene arrobas', function(){
			expect(function(){new AdministradorTienda('nombreUsuario', 'correo', 'Ana', 'García', null)}).to.throw('Correo incorrecto', null);
		})
		
		it('Lanza una excepción si contiene más de una arroba', function(){
			expect(function(){new AdministradorTienda('nombreUsuario', 'co@r@reo', 'Ana', 'García', null)}).to.throw('Correo incorrecto');
			expect(function(){new AdministradorTienda('nombreUsuario', 'co@r@r@eo', 'Ana', 'García', null)}).to.throw('Correo incorrecto');
		})
		
		it('Lanza una excepción si hay una arroba al principio', function(){
			expect(function(){new AdministradorTienda('nombreUsuario', '@correo', 'Ana', 'García', null)}).to.throw('Correo incorrecto');
		})
		
		it('Lanza una excepción si hay una arroba al final', function(){
			expect(function(){new AdministradorTienda('nombreUsuario', 'correo@', 'Ana', 'García', null)}).to.throw('Correo incorrecto');
		})
		
		it('Lanza una excepción si contiene un espacio', function(){
			expect(function(){new AdministradorTienda('nombreUsuario', 'cor @reo', 'Ana', 'García', null)}).to.throw('Correo incorrecto');
		})
		
		it('No lanza una excepción para un correo correcto', function(){
			new AdministradorTienda('nombreUsuario', 'usuario@correo.es', 'Ana', 'García', null);
		})
	})
	
	describe('Nombre de usuario', function(){
		it('Lanza una excepción si contiene un espacio', function(){
			expect(function(){new AdministradorTienda('nombre usuario', 'usuario@correo.es', 'Ana', 'García', null)}).to.throw('Nombre de usuario incorrecto');
		})
		
		it('Lanza una excepción si está vacío', function(){
			expect(function(){new AdministradorTienda('', 'usuario@correo.es', 'Ana', 'García', null)}).to.throw('Nombre de usuario incorrecto');
		})
		
		it('No lanza una excepción para un correo correcto', function(){
			new AdministradorTienda('nombreUsuario', 'usuario@correo.es', 'Ana', 'García', null);
		})
	})
	
	describe('Guarda correctamente', function(){
		it('Crea correctamente un usuario con datos correctos', function(){
			let administrador = new AdministradorTienda('nombreUsuario', 'usuario@correo.es', 'Ana', 'García', null);
			
			expect(administrador.getNombreUsuario()).to.equal('nombreUsuario');
			expect(administrador.getCorreo()).to.equal('usuario@correo.es');
			expect(administrador.getNombre()).to.equal('Ana');
			expect(administrador.getApellidos()).to.equal('García');
			expect(administrador.getTienda()).to.equal(null);
		})
	})
	
	
})
