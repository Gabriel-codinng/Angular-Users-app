import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
El módulo era el encargado de gestionar la existencia del componente, dentro de este
haciamos el import del módulo de rutas, todos los componentes dentro del módulo podían
utilizar el módulo de rutas, porque el módulo app se encargaba de proveerles esa
dependencias.

Ahora que no hay módulo, el mismo componente debe gestionar todas sus dependecias.
Dentro de la directiva @Componente, agreagamos la propiedad "imports" para definir 
todas las depenedecias del componente.
*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bustracker';
}
