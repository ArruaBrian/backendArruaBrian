class usuario {
  /**
   *
   * @param {string} nombre
   * @param {string} apellido
   * @param {object} libros
   * @param {array} mascotas
   */

  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullname() {
    console.log(`Nombre completo: ${this.nombre} ${this.apellido} 🥳`);
  }

  /**
   *
   * @param {string} mascota
   */

  addMascota(mascota) {
    this.mascotas.push(mascota);
    console.log(`Agregaste una mascota: ${mascota} 🥳`);
  }

  countMascotas() {
    console.log(`Tiene ${this.mascotas.length} mascotas 🥳`);
  }

  /**
   *
   * @param {string} nombre
   * @param {string} autor
   */

  addBook(nombre, autor) {
    this.libros[nombre] = autor;
    console.log(`Agregaste un libro: ${nombre} 🥳`);
  }

  getBookNames() {
    console.log(`Tiene en su colleccion: ${Object.keys(this.libros)} 🥳`);
  }
}

const Brian = new usuario(
  'Brian',
  'Arrua',
  { 'el hombre en busca del sentido': 'Viktor F.' },
  ['mora']
);

Brian.getFullname();
Brian.countMascotas();
Brian.addMascota('nuria');
Brian.countMascotas();
Brian.getBookNames();
Brian.addBook('Meditaciones de Marco Aurelio', 'Marco Aurelio');
Brian.getBookNames();
