import { Component } from '@angular/core';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CursosDetalheComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  nomePortal: string;

  constructor(){
    this.nomePortal = 'Portal de Cursos';
  }

}
