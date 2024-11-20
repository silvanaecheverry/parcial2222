import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';
import { DetallePacienteComponent } from './detalle-paciente/detalle-paciente.component';



@NgModule({
  declarations: [
    ListarPacientesComponent,
    DetallePacienteComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [ ListarPacientesComponent
  ]
})
export class PacienteModule { }
