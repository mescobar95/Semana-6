// Clase Usuario
class Usuario {
  constructor(nombre, edad, ocupacion) {
    this.nombre = nombre;
    this.edad = Number(edad);
    this.ocupacion = ocupacion;
  }

  describir() {
    return this.nombre + ", " + this.edad + " años, " + this.ocupacion;
  }

  esAdulto() {
    return this.edad >= 18;
  }
}





