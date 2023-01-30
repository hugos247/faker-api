

const { faker } = require('@faker-js/faker');


class Usuario {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.name();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zip_code: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}


//EXPRESS
const express = require('express');
const app = express();
const PORT = 8080;

//MIDDLEWARE 
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//LISTEN THE PORT
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

//GET 
app.get('/api/users/new', (req, res) => {
    res.json(new Usuario());
  });

  
app.get('/api/companies/new', (req, res) => {   
    res.json(new Empresa());
});


app.get('/api/user/company', (req, res) => {   
    res.json({usuario: new Usuario(), empresa: new Empresa ()});
});