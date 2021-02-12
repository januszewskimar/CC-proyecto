export class ValidacionDatos{
	static esCorrectoTelefono(num: string): boolean{
		const regex = /^\+?[0-9]+$/;
		return regex.test(num);
	}
	
	static esCorrectoNombreUsuario(nom: string): boolean{
		const regex = /^[a-zA-Z0-9\-\_]+$/;
		return regex.test(nom);
	}
	
	static esCorrectoCorreo(correo: string): boolean{
		const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // https://regexr.com/3e48o
		return regex.test(correo);
	}
}
