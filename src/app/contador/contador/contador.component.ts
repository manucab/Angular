import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <!-- Podemos llamar a código que tengamos en las propiedades de la clase AppComponent -->
    <!-- Usando doble llaves podemos usar cualquier expresion de JS -->
    <h1>{{ title }}</h1>
    <!-- <h1>{{1 + 3}}</h1> -->

    <h3>
      La base es: <strong> {{ base }} </strong>
    </h3>

    <!-- Para referirnos a eventos usamos paréntesis -->
    <button (click)="acumular(-base)">-{{ base }}</button>

    <span> {{ numero }} </span>

    <button (click)="acumular(base)">+{{ base }}</button>
  `,
})
export class ContadorComponent {
  public title: string = 'Contador App';
  // Establecemos una propiedad para el estado del contador
  public numero: number = 10;

  public base: number = 5;

  //Establecemos método para simplificar el template
  acumular(valor: number) {
    this.numero += valor;
  }
}
