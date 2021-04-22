import { Component } from '@angular/core';

@Component({
  //Seleccionamos la app, coincide con nombre en index
  selector: 'app-root',
  //Seleccionamos el archivo html
  templateUrl: './app.component.html'
  //template Nos permite elegir algo literal 
  // template: 
  //   <h1>Hola de nuevo</h1> 
})
export class AppComponent {

  public title : string = 'Contador App';
  // Establecemos una propiedad para el estado del contador
  public numero: number = 10;

  public base  : number = 5;

  //Establecemos método para simplificar el template
  acumular ( valor: number) {
    this.numero += valor;
  }
  
}
