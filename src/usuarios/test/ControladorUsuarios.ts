import 'mocha';
import chai = require ('chai');
import chaiAsPromised = require ('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
import { ControladorUsuarios } from '../ControladorUsuarios';
import { Usuario } from '../../entidades/Usuario';
import { Opinion } from '../../entidades/Opinion';
import { ExcepcionUsuarioYaExiste } from '../../excepciones/ExcepcionUsuarioYaExiste';


describe('ControladorUsuarios', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(ControladorUsuarios, 'Cargado');
		})
	})
	
	describe('Guardar usuarios', function(){
		it ('Lanza una excepción si se crea un usuario con el nombre de usuario igual que uno existente', async function(){
			let controlador = new ControladorUsuarios();
			
			let u1 = new Usuario('marcos123', 'marcos@correo.es', 'Marcos', 'García Santos');
			await controlador.addUsuario(u1);
			
			let u2 = new Usuario('marcos123', 'm@correo.es', 'Marcos', 'Fernández Hernández');
			await expect(controlador.addUsuario(u2)).to.eventually.be.rejectedWith(ExcepcionUsuarioYaExiste);
		})
		
		it ('No lanza una excepción si se crean usuarios con nombres de usuarios todavía no usados', async function(){
			let controlador = new ControladorUsuarios();
			
			let u1 = new Usuario('marcos123', 'marcos@correo.es', 'Marcos', 'García Santos');
			await controlador.addUsuario(u1);
			
			let u2 = new Usuario('abc123', 'marcos@correo.es', 'Marcos', 'García Santos');
			await controlador.addUsuario(u2);
		})
	})

})
