import { Component } from '@angular/core';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CommonModule } from '@angular/common';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, CursosDetalheComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  nomePortal: string;

  cursos: string[];

  //            \/ injeção de dependência para um novo serviço
  constructor(private cursosService: CursosService){
    this.nomePortal = 'Portal de Cursos';

    this.cursos = this.cursosService.getCursos();
  }

}
