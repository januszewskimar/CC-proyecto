import express = require('express');
import { AdministradorTienda } from "../entidades/AdministradorTienda";
import { ControladorAdministradoresTiendas } from "./ControladorAdministradoresTiendas";
import { ExcepcionUsuarioYaExiste } from "../excepciones/ExcepcionUsuarioYaExiste";
import { ExcepcionNombreUsuarioIncorrecto } from "../excepciones/ExcepcionNombreUsuarioIncorrecto";
import { ExcepcionCorreoIncorrecto } from "../excepciones/ExcepcionCorreoIncorrecto";

var app = express();
app.use(express.json());

var controlador:ControladorAdministradoresTiendas = new ControladorAdministradoresTiendas();

app.post('/administradores-tiendas', function (req, res) {
	try{
		var at: AdministradorTienda = new AdministradorTienda(req.body.nombreUsuario, req.body.correo, req.body.nombre, req.body.apellidos);
		controlador.addAdministrador(at);
		res.status(200).send("Administrador de tienda creado");
	} catch (err) {
		if (err instanceof ExcepcionNombreUsuarioIncorrecto){
			res.status(400).send("Nombre de usuario incorrecto");
		}
		else if (err instanceof ExcepcionCorreoIncorrecto){
			res.status(400).send("Correo electrónico incorrecto");
		}
		else if (err instanceof ExcepcionUsuarioYaExiste){
			res.status(409).send("Ya existe un administrador con este nombre de usuario");
		}
		else{
			res.status(500).send("Error no especificado");
		}
	}
});

export default app;
