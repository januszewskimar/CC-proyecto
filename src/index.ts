const { Etcd3 } = require('etcd3');
const client = new Etcd3();
const { MongoClient } = require("mongodb");
import winston = require('winston');
import expressWinston = require('express-winston');
import express = require('express');
import { getRutas as getRutasUsuarios } from './usuarios/RutasUsuarios';
import { getRutas as getRutasAdministradores } from './administradores-tiendas/RutasAdministradoresTiendas';
import { getRutas as getRutasTiendas } from './tiendas/RutasTiendas';
import { getRutas as getRutasOpiniones } from './opiniones/RutasOpiniones';

var app = express();

app.use(expressWinston.logger({
      transports: [
	new winston.transports.Console()
      ],
      format: winston.format.combine(
	winston.format.colorize(),
	winston.format.json()
      )
}));

(async() => {
	var uri;

	try{
		uri = await client.get('uribd').string();
	} catch(err){ console.log(err); }

	if (uri == null){
		uri = process.env.URIBD || "mongodb://admin:pass@localhost?retryWrites=true&writeConcern=majority" ;
	}

	const cliente = new MongoClient(uri, { useUnifiedTopology: true });
	await cliente.connect();


	var nombrebd;

	try{
		nombrebd = await client.get('nombrebd').string();
	} catch(err){ console.log(err); }

	if (nombrebd == null){
		nombrebd = process.env.NOMBREBD || "ShopSafe" ;
	}

	var baseDatos = cliente.db(nombrebd);


	var rutasUsuarios = await getRutasUsuarios(baseDatos.collection('usuarios'));
	var rutasAdministradores = await getRutasAdministradores(baseDatos.collection('administradoresTiendas'));
	var rutasTiendas = await getRutasTiendas(baseDatos.collection('tiendas'));
	var rutasOpiniones = await getRutasOpiniones(baseDatos.collection('opiniones'));

	app.use(rutasUsuarios);
	app.use(rutasAdministradores);
	app.use(rutasOpiniones);
	app.use(rutasTiendas);

	var puerto;

	try{
		puerto = await client.get('puerto').string();
	} catch(err){ console.log(err); }

	if (puerto == null){
		puerto = process.env.PORT || 8080;
	}

	try{
		app.listen(puerto);
	} catch(err) { console.log(err); }

	console.log('Escuchando en http://127.0.0.1:' + puerto + '/');
})()
