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

	uri = await client.get('uribd').string();

	if (uri == null){
		uri = process.env.URIBD || "mongodb://admin:pass@mongodb?retryWrites=true&writeConcern=majority" ;
	}

	const cliente = new MongoClient(uri, { useUnifiedTopology: true });
	await cliente.connect();


	var nombrebd;

	nombrebd = await client.get('nombrebd').string();

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

	puerto = await client.get('puerto').string();

	if (puerto == null){
		puerto = process.env.PORT || 8080;
	}

	app.listen(puerto);
	console.log('Escuchando en http://127.0.0.1:' + puerto + '/');
})().catch((err) => { console.log(err); });
