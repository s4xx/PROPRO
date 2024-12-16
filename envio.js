// Clase base Producto
class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    obtenerPrecio() {
      return this.precio;
    }
  }
  
  // Decorador para agregar opción de envío prioritario
  class EnvioPrioritarioDecorator {
    constructor(producto) {
      this.producto = producto;
      this.precioEnvioPrioritario = 10; // Precio adicional por envío prioritario
    }
  
    obtenerPrecio() {
      // Agregar el precio del envío prioritario al precio del producto base
      return this.producto.obtenerPrecio() + this.precioEnvioPrioritario;
    }
  }
  
  // Crear un producto base
  const productoBase = new Producto('Camiseta', 20);
  
  // Agregar la opción de envío prioritario al producto base utilizando el decorador
  const productoConEnvioPrioritario = new EnvioPrioritarioDecorator(productoBase);
  
  // Obtener el precio total del producto con envío prioritario
  console.log(productoConEnvioPrioritario.obtenerPrecio()); // Resultado: 30 (20 + 10)
  