import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css'],
  standalone: false
})
export class ListarPacientesComponent implements OnInit {
  pacientes: Paciente[] = [];
  selectedPaciente!: Paciente; 
  
  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe({
      next: (data) => {
        console.log('Datos obtenidos del servicio:', data); // Verifica los datos aquí
        this.pacientes = data;
      },
      error: (err) => {
        console.error('Error al obtener pacientes:', err); // Captura errores
      },
    });
    
  }
  getMenoresDeEdad(): number {
    return this.pacientes.filter((paciente) => paciente.edad < 18).length;
  }
  onSelect(paciente: Paciente): void {
    this.selectedPaciente = paciente;
  }
}
