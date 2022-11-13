const fs = require('fs');

class Container {
  constructor(file) {
    this.file = file;
  }

  writeFile = async (data) => {
    try {
      await fs.promises.writeFile(this.file, JSON.stringify(data, null, 2));
    } catch (err) {
      console.log(`Oh no... a ocurrido un error 😮‍💨: ${err}`);
    }
  };

  getAll = async () => {
    try {
      const productos = await fs.promises.readFile(this.file, 'utf-8');
      return JSON.parse(productos);
    } catch (err) {
      console.log(`Oh no... a ocurrido un error 😮‍💨: ${err}`);
      return;
    }
  };

  save = async (data) => {
    try {
      let productos = await this.getAll();
      let newId = productos.length == 0 ? (newId = 1) : productos.length + 1;
      let newObj = { ...data, id: newId };
      productos.push(newObj);
      await this.writeFile(productos);
      return newObj.id;
    } catch (err) {
      console.error(`Oh no... a ocurrido un error 😮‍💨: ${err}`);
    }
  };

  getById = async (id) => {
    try {
      const productos = await this.getAll();
      return await productos.filter((data) => data.id == id);
    } catch (err) {
      console.error(`Oh no... a ocurrido un error 😮‍💨: ${err}`);
    }
  };

  deleteById = async (id) => {
    try {
      const productos = await this.getAll();
      console.log(productos)
      const deletedFile = productos.filter((data) => data.id != id);
      console.log(deletedFile)
      await this.writeFile(deletedFile)
    } catch (err) {
      console.error(`Oh no... a ocurrido un error 😮‍💨: ${err}`);
    }
  };

  deleteAll = async () => {
    try {
      await this.writeFile([]);
    } catch (err) {
      console.error(`Oh no... a ocurrido un error 😮‍💨: ${err}`);
    }
  };
}

const contenedor = new Container('./productos.txt');
contenedor.writeFile([
  {
    Producto1: 1,
    id: 1,
  },
  {
    Producto1: 3,
    id: 3,
  },
  {
    Producto1: 4,
    id: 4,
  },
  

]);
contenedor.getAll().then(res => console.log(res))


// Creacion del servidor

const express = require('express')

const app = express()

app.get('/', (req, res)=>{

  res.send('Este es el inicio')

})

app.get('/productos', (req, res)=>{

  const productos = async ()=>{

    const resultado = await contenedor.getAll()

    res.send(resultado)

  }

  productos()

})

app.get('/productoRandom', (req, res)=>{

  const productos = async ()=>{

    const resultado = await contenedor.getAll()

    const random = Math.floor(Math.random() * resultado.length);

    res.send(resultado[random])

  }

  productos()

})

const server = app.listen(8080, ()=>{


  console.log('Servidor escuchando en el 8080')


})

 

