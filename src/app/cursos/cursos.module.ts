import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CursosComponent
  ],
  providers: [ CursosService ] // aplicando serviços
})
export class CursosModule { }
