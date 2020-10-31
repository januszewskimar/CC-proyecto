export class Usuario{
	private nombreUsuario: string;
	private correo: string;
	private nombre: string;
	private apellidos: string;
	
	constructor (nombreUsuario: string, correo: string, nombre: string, apellidos: string){
		this.nombreUsuario = nombreUsuario;
		this.correo = correo;
		this.nombre = nombre;
		this.apellidos = apellidos;
	}
}
