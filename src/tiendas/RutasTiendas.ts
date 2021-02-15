import express = require('express');
import { Collection } from 'mongodb';
import { Tienda } from "../entidades/Tienda";
import { ControladorTiendas } from "./ControladorTiendas";
import { ExcepcionTelefonoIncorrecto } from "../excepciones/ExcepcionTelefonoIncorrecto";

var router = express.Router();
router.use(express.json());

var controlador:ControladorTiendas = new ControladorTiendas();


function getRutas(coleccion: Collection){
	controlador.setColeccion(coleccion);
	router.post('/tiendas', async function (req, res) {
		try{
			var t = new Tienda(req.body.nombre, req.body.direccion, req.body.telefono, req.body.administrador);
			t = await controlador.addTienda(t);
			res.status(201).send(t);
		} catch (err) {
			if (err instanceof ExcepcionTelefonoIncorrecto){
				res.status(400).send({"error": "Teléfono incorrecto"});
			}
			else{
				res.status(400).send({"error": "Error no especificado"});
			}
		}
	});
	return router;
}

export { getRutas };
