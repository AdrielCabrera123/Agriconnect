import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos = [
    { id: 1, nombre: 'Verduras', imagenUrl: 'https://www.nutricionyentrenamiento.fit/images/alimento/506.jpg', detalles: 'Vegetales frescos', categoria: 'Vegetales', precio: 12 },
    { id: 2, nombre: 'Carne Fresca', imagenUrl: 'https://img.freepik.com/foto-gratis/carne-cruda-mesa_23-2150857912.jpg', detalles: 'Carne de calidad', categoria: 'Carne', precio: 25 },
    { id: 3, nombre: 'Carne Roja', imagenUrl: 'https://www.shutterstock.com/image-photo/various-types-fresh-meat-pork-600nw-1619708224.jpg', detalles: 'Carne recien extraida', categoria: 'Carne', precio: 36 },
    { id: 4, nombre: 'Carne de vaca', imagenUrl: 'https://img.freepik.com/foto-gratis/bistec-jugoso-carne-rara-especias-verduras-asadas_24972-2328.jpg', detalles: 'Excelente carne', categoria: 'Carne', precio: 45.6 },
    { id: 5, nombre: 'Carne de cerdo', imagenUrl: 'https://static.diariovasco.com/www/multimedia/201906/03/media/cortadas/carne-roja-kS1C-R5uqUSGFlSqj84mn1I9bQuN-624x385@Diario%20Vasco.jpg', detalles: 'Succulent lamb', categoria: 'Carne', precio: 52.32 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  agregarProducto() {
    // Lógica para agregar un producto
  }

  viewProducto(producto: any) {
    // Lógica para ver un producto
  }

  deleteProducto(producto: any) {
    // Lógica para eliminar un producto
  }
}
