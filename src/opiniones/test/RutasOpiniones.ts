import 'mocha';
import 'supertest';
import app from '../RutasOpiniones'; 

var request = require('supertest');


describe('Rutas de Opiniones', function(){
  describe('POST /tiendas/:tienda/opiniones', function() {
    it('Publica una opinión correcta', function(done) {
      var data = { "nombreUsuario": "david", "titulo": "Bien", "valoracionNumerica": "5", "descripcion": "Todo muy bien" }
      request(app)
        .post('/tiendas/1/opiniones')
        .send(data)
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  
    it('Devuelve error si se intenta publicar una opinión con una valoración numérica incorrecta', function(done) {
      var data = { "nombreUsuario": "david", "titulo": "Bien", "valoracionNumerica": "6", "descripcion": "Todo muy bien" }
      request(app)
        .post('/tiendas/1/opiniones')
        .send(data)
        .expect('Content-Type', /json/)
        .expect(400, done);
    });
  });



  describe('GET /tiendas/:tienda/opiniones', function() {
    it('Devuelve las opiniones sobre una tienda', function(done) {
      request(app)
        .get('/tiendas/2/opiniones')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });



  describe('GET /tiendas/:tienda/valoracion-media', function() {
    it('Devuelve error si se quiere obtener la valoración media de una tienda sobre la que no hay opiniones', function(done) {
      request(app)
        .get('/tiendas/3/valoracion-media')
        .expect('Content-Type', /json/)
        .expect(406, done);
    });
  
    it('Devuelve la valoración media de una tienda si existen opiniones sobre ella', function(done) {
      var data = { "nombreUsuario": "carolina", "titulo": "Bien", "valoracionNumerica": "5", "descripcion": "Todo muy bien" }
      request(app)
        .post('/tiendas/4/opiniones')
        .send(data)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(){
          request(app)
            .get('/tiendas/4/valoracion-media')
            .expect('Content-Type', /json/)
            .expect(200, done);
        });
    });
  });



  describe('DELETE /tiendas/:tienda/opiniones/:id', function() {
    it('Elimina una opinión existente', function(done) {
      var data = { "nombreUsuario": "juan", "titulo": "Regular", "valoracionNumerica": "3", "descripcion": "Regular" }
      request(app)
        .post('/tiendas/5/opiniones')
        .send(data)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(){
          request(app)
            .delete('/tiendas/5/opiniones/0')
            .expect('Content-Type', /json/)
            .expect(200, done)
        });
    });

    it('Devuelve error si se intenta eliminar una opinión inexistente', function(done) {
      request(app)
        .delete('/tiendas/6/opiniones/241')
        .expect('Content-Type', /json/)
        .expect(404, done);
    });
  });



  describe('PUT /tiendas/:tienda/opiniones/:id/respuesta', function() {
    it('Devuelve error si se intenta publicar una respuesta a una opinión que no existe', function(done) {
      var data = { "contenido": "No estamos de acuerdo" }
      request(app)
        .put('/tiendas/7/opiniones/0/respuesta')
        .send(data)
        .expect('Content-Type', /json/)
        .expect(404, done);
    });
  
    it('Publica una respuesta a una opinión existente', function(done) {
      var data1 = { "nombreUsuario": "david", "titulo": "Bien", "valoracionNumerica": "5", "descripcion": "Todo muy bien" }
      var data2 = { "contenido": "No estamos de acuerdo" }
      request(app)
        .post('/tiendas/8/opiniones')
        .send(data1)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(){
          request(app)
            .put('/tiendas/8/opiniones/0/respuesta')
            .send(data2)
            .expect('Content-Type', /json/)
            .expect(200, done);
        });
    });
  });



  describe('DELETE /tiendas/:tienda/opiniones/:id/respuesta', function() {
    it('Devuelve error si se intenta eliminar una respuesta a una opinión que no existe', function(done) {
      var data = { "contenido": "No estamos de acuerdo" }
      request(app)
        .delete('/tiendas/9/opiniones/0/respuesta')
        .send(data)
        .expect('Content-Type', /json/)
        .expect(404, done);
    });
    
    it('Devuelve error si se intenta eliminar la respuesta de una opinión existente que no la contiene', function(done) {
      var data1 = { "nombreUsuario": "david", "titulo": "Bien", "valoracionNumerica": "5", "descripcion": "Todo muy bien" }
      var data2 = { "contenido": "No estamos de acuerdo" }
      request(app)
        .post('/tiendas/10/opiniones')
        .send(data1)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(){
          request(app)
            .delete('/tiendas/10/opiniones/0/respuesta')
            .expect('Content-Type', /json/)
            .expect(404, done);
          });
      });
  
    it('Elimina la respuesta de una opinión existente que la contiene', function(done) {
      var data1 = { "nombreUsuario": "david", "titulo": "Bien", "valoracionNumerica": "5", "descripcion": "Todo muy bien" }
      var data2 = { "contenido": "No estamos de acuerdo" }
      request(app)
        .post('/tiendas/11/opiniones')
        .send(data1)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(){
          request(app)
            .put('/tiendas/11/opiniones/0/respuesta')
            .send(data2)
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(){
              request(app)
                .delete('/tiendas/11/opiniones/0/respuesta')
                .expect('Content-Type', /json/)
                .expect(200, done);
              });
          });
      });
   });
});
