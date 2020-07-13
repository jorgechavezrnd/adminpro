import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';
import { MedicoService } from '../../services/service.index';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: [
  ]
})
export class MedicosComponent implements OnInit {

  medicos: Medico[] = [];
  desde: number = 0;

  cargando: boolean = true;

  constructor(public _medicoService: MedicoService) { }

  ngOnInit(): void {

    this.cargarMedicos();

  }

  cargarMedicos() {

    this.cargando = true;

    this._medicoService.cargarMedicos(this.desde)
          .subscribe(medicos => {

            this.medicos = medicos;
            this.cargando = false;

          });

  }

  cambiarDesde(valor: number) {

    const desde = this.desde + valor;
    console.log(desde);

    if (desde >= this._medicoService.totalMedicos) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarMedicos();

  }

  buscarMedico(termino: string) {

    if (termino.length <= 0) {
      this.cargarMedicos();
      return;
    }

    this.cargando = true;

    this._medicoService.buscarMedicos(termino)
          .subscribe(medicos => {

            this.medicos = medicos;
            this.cargando = false;

          });

  }

  borrarMedico(medico: Medico) {

    this._medicoService.borrarMedico(medico._id)
          .subscribe(() => this.cargarMedicos());

  }

}
