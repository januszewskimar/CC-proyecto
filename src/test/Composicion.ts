import chai = require("chai");
import chaiHttp = require("chai-http");
const should = chai.should();

const URL = "http://localhost:8080";

chai.use(chaiHttp);


describe("Usuarios", () => {
  it("Crea un usuario", done => {
    chai
      .request(URL)
      .post("/usuarios")
      .send( { 'nombreUsuario': 'juan', 'correo': 'juan@correo.es', 'nombre' : 'Juan', 'apellidos' : 'Fernández Rubio' } )
      .end((err, res) => {
        if (err) done(err)
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a("object");
        res.body.should.have.property("nombreUsuario");
        res.body.should.have.property("correo");
        res.body.should.have.property("nombre");
        res.body.should.have.property("apellidos");
        done();
      });
  });
});

describe("Administradores de tiendas", () => {
  it("Crea un administrador de tienda", done => {
    chai
      .request(URL)
      .post("/administradores-tiendas")
      .send( { 'nombreUsuario': 'alicia', 'correo': 'alicia@correo.es', 'nombre' : 'Alicia', 'apellidos' : 'Santos González' } )
      .end((err, res) => {
        if (err) done(err)
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a("object");
        res.body.should.have.property("nombreUsuario");
        res.body.should.have.property("correo");
        res.body.should.have.property("nombre");
        res.body.should.have.property("apellidos");
        done();
      });
  });
});

describe("Tiendas", () => {
  it("Crea una tienda", done => {
    chai
      .request(URL)
      .post("/tiendas")
      .send( { 'nombre': 'Tienda ABC', 'direccion': 'Calle Mayor 2, 3A', 'telefono' : '123456789', 'administrador' : 'alicia' } )
      .end((err, res) => {
        if (err) done(err)
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a("object");
        res.body.should.have.property("nombre");
        res.body.should.have.property("direccion");
        res.body.should.have.property("telefono");
        res.body.should.have.property("administrador");
        done();
      });
  });
});

describe("Opiniones", () => {
  it("Crea una opinión", done => {
    chai
      .request(URL)
      .post("/tiendas/0/opiniones")
      .send( { 'nombreUsuario': 'abc', 'titulo': 'titulo1', 'valoracionNumerica' : 2 } )
      .end((err, res) => {
        if (err) done(err)
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a("object");
        res.body.should.have.property("usuario");
        res.body.should.have.property("titulo");
        res.body.should.have.property("valoracionNumerica");
        done();
      });
  });

  it("Devuelve la opinión creada", done => {
    chai
      .request(URL)
      .get("/tiendas/0/opiniones")
      .end((err, res) => {
        if (err) done(err)
        res.should.have.status(200);
        res.body.should.be.a("array");

        const obj = res.body.pop();
        obj.usuario.should.equal('abc');
        obj.titulo.should.equal('titulo1');
        obj.valoracionNumerica.should.equal(2);
        done();
      });
  });

  it("Devuelve la valoración media de la tienda", done => {
    chai
      .request(URL)
      .get("/tiendas/0/valoracion-media")
      .end((err, res) => {
        if (err) done(err)
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property("valoracion-media");
        res.body['valoracion-media'].should.equal(2);
        done();
      });
  });
  
  it("Publica una respuesta a la opinión creada", done => {
    chai
      .request(URL)
      .put("/tiendas/0/opiniones/0/respuesta")
      .send({ "contenido" : "No estamos de acuerdo" })
      .end((err, res) => {
        if (err) done(err)
        res.should.have.status(201);
        res.body.should.be.a("object");
        res.should.be.json;
        res.body.should.have.property("contenido");
        res.body.should.have.property("fechaCreacion");
        done();
      });
  });

  
  it("Elimina la respuesta publicada", done => {
    chai
      .request(URL)
      .delete("/tiendas/0/opiniones/0/respuesta")
      .end((err, res) => {
        if (err) done(err)
        res.should.have.status(200);
        done();
      });
  });
  
  it("Elimina la opinión publicada", done => {
    chai
      .request(URL)
      .delete("/tiendas/0/opiniones/0")
      .end((err, res) => {
        if (err) done(err)
        res.should.have.status(200);
        done();
      });
  });
});
