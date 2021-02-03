import express = require('express');
import { Tienda } from "../entidades/Tienda";
import { ControladorTiendas } from "./ControladorTiendas";
import { ExcepcionTelefonoIncorrecto } from "../excepciones/ExcepcionTelefonoIncorrecto";

var app = express();
app.use(express.json());

var controlador:ControladorTiendas = new ControladorTiendas();

app.post('/tiendas', function (req, res) {
	try{
		var t = new Tienda(req.body.nombre, req.body.direccion, req.body.telefono, req.body.administrador);
		controlador.addTienda(t);
		res.status(200).send("Tienda creada");
	} catch (err) {
		if (err instanceof ExcepcionTelefonoIncorrecto){
			res.status(400).send("Teléfono incorrecto");
		}
		else{
			res.status(500).send("Error no especificado");
		}
	}
});

export default app;
