import 'mocha';
import { ControladorUsuarios } from '../ControladorUsuarios';
import { Usuario } from '../Usuario';
import { Opinion } from '../Opinion';
import { ExcepcionUsuarioYaExiste } from '../ExcepcionUsuarioYaExiste';
import { expect } from 'chai';

describe('ControladorUsuarios', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(ControladorUsuarios, 'Cargado');
		})
	})
	
	describe('Guardar usuarios', function(){
		it ('Lanza una excepción si se crea un usuario con el nombre de usuario igual que uno existente', function(){
			let controlador = new ControladorUsuarios();
			
			let u1 = new Usuario('marcos123', 'marcos@correo.es', 'Marcos', 'García Santos');
			controlador.addUsuario(u1);
			
			let u2 = new Usuario('marcos123', 'm@correo.es', 'Marcos', 'Fernández Hernández');
			expect(() => {controlador.addUsuario(u2)}).to.throw(ExcepcionUsuarioYaExiste);
		})
		
		it ('No lanza una excepción si se crean usuarios con nombres de usuarios todavía no usados', function(){
			let controlador = new ControladorUsuarios();
			
			let u1 = new Usuario('marcos123', 'marcos@correo.es', 'Marcos', 'García Santos');
			controlador.addUsuario(u1);
			
			let u2 = new Usuario('abc123', 'marcos@correo.es', 'Marcos', 'García Santos');
			controlador.addUsuario(u2);
		})
	})

})
