import 'mocha';
import 'supertest';
import app from '../RutasTiendas'; 

var request = require('supertest');

describe ('Rutas de Tiendas', function(){
  describe('POST /tiendas', function() {
    it('Crea una tienda si los datos son correctos', function(done) {
      var data = {"nombre": "Tienda ABC", "direccion": "Calle XYZ, 2A", "telefono": "123456789", "administrador": "fran"}
      request(app)
        .post('/tiendas')
        .send(data)
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  
    it('Devuelve error cuando el número de teléfono es incorrecto', function(done) {
      var data = {"nombre": "Tienda ABC", "direccion": "Calle XYZ, 2A", "telefono": "1234 56789", "administrador": "fran"}
      request(app)
        .post('/tiendas')
        .send(data)
        .expect('Content-Type', /json/)
        .expect(400, done);
    });
  });
});
