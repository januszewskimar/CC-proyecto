import 'mocha';
import 'supertest';
import app from '../ServidorOpiniones'; 

var request = require('supertest');


describe('ServidorOpiniones', function(){
  describe('POST /tiendas/:tienda/opiniones', function() {
    it('Publica una opinión correcta', function(done) {
      var data = { "nombreUsuario": "david", "titulo": "Bien", "valoracionNumerica": "5", "descripcion": "Todo muy bien" }
      request(app)
        .post('/tiendas/Tienda%20Granada/opiniones')
        .send(data)
        .expect('Content-Type', /text/)
        .expect(200, done);
    });
  
    it('Devuelve error si se intenta publicar una opinión con una valoración numérica incorrecta', function(done) {
      var data = { "nombreUsuario": "david", "titulo": "Bien", "valoracionNumerica": "6", "descripcion": "Todo muy bien" }
      request(app)
        .post('/tiendas/Tienda%20Granada/opiniones')
        .send(data)
        .expect('Content-Type', /text/)
        .expect(400, done);
    });
  });



  describe('GET /tiendas/:tienda/opiniones', function() {
    it('Devuelve las opiniones sobre una tienda', function(done) {
      request(app)
        .get('/tiendas/Tienda%20Granada/opiniones')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });



  describe('GET /tiendas/:tienda/valoracion-media', function() {
    it('Devuelve error si se quiere obtener la valoración media de una tienda sobre la que no hay opiniones', function(done) {
      request(app)
        .get('/tiendas/Tienda%20XYZ/valoracion-media')
        .expect('Content-Type', /text/)
        .expect(406, done);
    });
  
    it('Devuelve la valoración media de una tienda si existen opiniones sobre ella', function(done) {
      var data = { "nombreUsuario": "carolina", "titulo": "Bien", "valoracionNumerica": "5", "descripcion": "Todo muy bien" }
      request(app)
        .post('/tiendas/Tienda%20Albacete/opiniones')
        .send(data)
        .expect('Content-Type', /text/)
        .expect(200)
        .end(function(){
          request(app)
            .get('/tiendas/Tienda%20Albacete/valoracion-media')
            .expect('Content-Type', /text/)
            .expect(200, done);
        });
    });
  });



  describe('DELETE /tiendas/:tienda/opiniones/:id', function() {
    it('Elimina una opinión existente', function(done) {
      var data = { "nombreUsuario": "juan", "titulo": "Regular", "valoracionNumerica": "3", "descripcion": "Regular" }
      request(app)
        .post('/tiendas/Tienda%20ABC/opiniones')
        .send(data)
        .expect('Content-Type', /text/)
        .expect(200)
        .end(function(){
          request(app)
            .delete('/tiendas/Tienda%20ABC/opiniones/0')
            .expect('Content-Type', /text/)
            .expect(200, done)
        });
    });

    it('Devuelve error si se intenta eliminar una opinión inexistente', function(done) {
      request(app)
        .delete('/tiendas/Tienda%20Granada/opiniones/241')
        .expect('Content-Type', /text/)
        .expect(404, done);
    });
  });



  describe('PUT /tiendas/:tienda/opiniones/:id/respuesta', function() {
    it('Devuelve error si se intenta publicar una respuesta a una opinión que no existe', function(done) {
      var data = { "contenido": "No estamos de acuerdo" }
      request(app)
        .put('/tiendas/Tienda%20RTY/opiniones/0/respuesta')
        .send(data)
        .expect('Content-Type', /text/)
        .expect(404, done);
    });
  
    it('Publica una respuesta a una opinión existente', function(done) {
      var data1 = { "nombreUsuario": "david", "titulo": "Bien", "valoracionNumerica": "5", "descripcion": "Todo muy bien" }
      var data2 = { "contenido": "No estamos de acuerdo" }
      request(app)
        .post('/tiendas/Tienda%20QWE/opiniones')
        .send(data1)
        .expect('Content-Type', /text/)
        .expect(200)
        .end(function(){
          request(app)
            .put('/tiendas/Tienda%20QWE/opiniones/0/respuesta')
            .send(data2)
            .expect('Content-Type', /text/)
            .expect(200, done);
        });
    });
  });



  describe('DELETE /tiendas/:tienda/opiniones/:id/respuesta', function() {
    it('Devuelve error si se intenta eliminar una respuesta a una opinión que no existe', function(done) {
      var data = { "contenido": "No estamos de acuerdo" }
      request(app)
        .delete('/tiendas/Tienda%20RFL/opiniones/0/respuesta')
        .send(data)
        .expect('Content-Type', /text/)
        .expect(404, done);
    });
    
    it('Devuelve error si se intenta elimina la respuesta de una opinión existente que no la contiene', function(done) {
      var data1 = { "nombreUsuario": "david", "titulo": "Bien", "valoracionNumerica": "5", "descripcion": "Todo muy bien" }
      var data2 = { "contenido": "No estamos de acuerdo" }
      request(app)
        .post('/tiendas/Tienda%20UYT/opiniones')
        .send(data1)
        .expect('Content-Type', /text/)
        .expect(200)
        .end(function(){
          request(app)
            .delete('/tiendas/Tienda%20UYT/opiniones/0/respuesta')
            .expect('Content-Type', /text/)
            .expect(404, done);
          });
      });
  
    it('Elimina la respuesta de una opinión existente que la contiene', function(done) {
      var data1 = { "nombreUsuario": "david", "titulo": "Bien", "valoracionNumerica": "5", "descripcion": "Todo muy bien" }
      var data2 = { "contenido": "No estamos de acuerdo" }
      request(app)
        .post('/tiendas/Tienda%20UYT/opiniones')
        .send(data1)
        .expect('Content-Type', /text/)
        .expect(200)
        .end(function(){
          request(app)
            .put('/tiendas/Tienda%20UYT/opiniones/0/respuesta')
            .send(data2)
            .expect('Content-Type', /text/)
            .expect(200)
            .end(function(){
              request(app)
                .delete('/tiendas/Tienda%20UYT/opiniones/0/respuesta')
                .expect('Content-Type', /text/)
                .expect(200, done);
              });
          });
      });
   });
});
