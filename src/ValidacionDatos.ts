export class ValidacionDatos{
	static esCorrectoTelefono(num: string): boolean{
		let regex = /^\+?[0-9]+$/;
		return regex.test(num);
	}
	
	static esCorrectoNombreUsuario(nom: string): boolean{
		let regex = /^[a-zA-Z0-9\-\_]+$/;
		return regex.test(nom);
	}
	
	static esCorrectoCorreo(correo: string): boolean{
		let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // https://regexr.com/3e48o
		return regex.test(correo);
	}
}
