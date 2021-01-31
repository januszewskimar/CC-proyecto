const { Etcd3 } = require('etcd3');
const client = new Etcd3();
import app from "./RutasOpiniones";

(async() => {
	var puerto = await client.get('puerto').string();

	if (puerto == null){
		puerto = process.env.PORT || 8080;
	}
	
	app.listen(puerto);
	console.log('Escuchando en http://127.0.0.1:' + puerto + '/');
})()
