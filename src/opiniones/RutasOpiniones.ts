import express = require('express');
import { Collection } from 'mongodb';
import { Opinion } from "../entidades/Opinion";
import { RespuestaOpinion } from "../entidades/RespuestaOpinion";
import { ControladorOpiniones } from "./ControladorOpiniones";
import { ExcepcionValoracionNumericaIncorrecta } from "../excepciones/ExcepcionValoracionNumericaIncorrecta";
import { ExcepcionNoHayOpiniones } from "../excepciones/ExcepcionNoHayOpiniones";
import { ExcepcionOpinionNoExiste } from "../excepciones/ExcepcionOpinionNoExiste";
import { ExcepcionRespuestaOpinionNoExiste } from "../excepciones/ExcepcionRespuestaOpinionNoExiste";

var router = express.Router();
router.use(express.json());

var controlador: ControladorOpiniones = new ControladorOpiniones();


function getRutas(coleccion: Collection){
	controlador.setColeccion(coleccion);
	
	router.post('/tiendas/:tienda/opiniones', async function (req, res) {
		try{
			var op: Opinion = await controlador.publicarOpinion(req.body.nombreUsuario, parseInt(req.params.tienda), req.body.titulo, parseInt(req.body.valoracionNumerica), req.body.descripcion);
			res.status(201).send(op);
		} catch (err) {
			if (err instanceof ExcepcionValoracionNumericaIncorrecta){
				res.status(400).send({"error": "Valoración numérica incorrecta"});
			}
			else{
				res.status(400).send({"error": "Error no especificado"});
			}
		}
	});

	router.get('/tiendas/:tienda/opiniones', async function (req, res) {
		var lista = await controlador.getOpinionesTienda(parseInt(req.params.tienda));
		res.status(200).send(lista);
	});

	router.get('/tiendas/:tienda/valoracion-media', async function(req, res) {
		try{
			var resultado = await controlador.getValoracionMediaTienda(parseInt(req.params.tienda));
			res.status(200).send({"valoracion-media": resultado});
		} catch (err) {
			if (err instanceof ExcepcionNoHayOpiniones){
				res.status(404).send({"error": "No existen opiniones sobre la tienda"});
			}
			else{
				res.status(400).send({"error": "Error no especificado"});
			}
		}
	});

	router.delete('/tiendas/:tienda/opiniones/:id', async function (req, res){
		if (await controlador.eliminarOpinion(parseInt(req.params.tienda), parseInt(req.params.id))){
			res.status(200).send({"mensaje": "Opinión eliminada"});
		}
		else{
			res.status(404).send({"error": "Recurso no encontrado"});
		}	

	});

	router.put('/tiendas/:tienda/opiniones/:id/respuesta', async function (req, res) {
		try{
			var r: RespuestaOpinion = await controlador.publicarRespuesta(parseInt(req.params.tienda), parseInt(req.params.id), req.body.contenido);
			res.status(201).send(r);
		} catch (err) {
			if (err instanceof ExcepcionOpinionNoExiste){
				res.status(404).send({"error": "La opinión no existe"});
			}
			else{
				res.status(400).send({"error": "Error no especificado"});
			}
		}
	});

	router.delete('/tiendas/:tienda/opiniones/:id/respuesta', async function (req, res){
		try{
			await controlador.eliminarRespuestaOpinion(parseInt(req.params.tienda), parseInt(req.params.id));
			res.status(200).send({"mensaje:": "Respuesta eliminada"});
		} catch (err) {
			if (err instanceof ExcepcionOpinionNoExiste){
				res.status(404).send({"error": "La opinión no existe"});
			}
			else if (err instanceof ExcepcionRespuestaOpinionNoExiste){
				res.status(404).send({"error": "La opinión no contiene una respuesta"});
			}
			else{
				res.status(400).send({"error": "Error no especificado"});
			}
		}

	});
	
	return router;
}

export { getRutas };
