import { Component } from '@angular/core';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, CursosDetalheComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  nomePortal: string;

  cursos: string[] = ['Java', 'Ext JS', 'Angular'];

  constructor(){
    this.nomePortal = 'Portal de Cursos';
  }

}
