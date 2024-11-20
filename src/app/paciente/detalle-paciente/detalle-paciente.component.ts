import { Component, Input } from '@angular/core';
import { Paciente } from '../paciente';
@Component({
  selector: 'app-detalle-paciente',
  standalone: false,
  
  templateUrl: './detalle-paciente.component.html',
  styleUrl: './detalle-paciente.component.css'
})
export class DetallePacienteComponent {
  @Input() paciente!: Paciente; // Parámetro de entrada para el paciente seleccionado

}
