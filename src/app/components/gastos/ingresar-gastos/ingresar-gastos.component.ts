import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrls: ['./ingresar-gastos.component.css']
})
export class IngresarGastosComponent {
  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textIncorrecto: string;

  constructor(private _presupuestoService : PresupuestoService){
  this.nombreGasto = '';
  this.cantidad = 0;
  this.formularioIncorrecto = false;
  this.textIncorrecto = 'Nombre gasto o cantidad Incorrecta';
  }

  agregarGasto() {
    if (this.cantidad > this._presupuestoService.restante ) {
      this.formularioIncorrecto = true;
      this.textIncorrecto = "Cantidad ingrasada es mayor al restante"
      return;
  }


    if (this.nombreGasto === '' || this.cantidad <= 0) {
      this.formularioIncorrecto = true;
    }else{
      // Crar el objeto 
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }

      // Eviamos elobjeto a los suscriptores via subjet
      this._presupuestoService.agregarGato(GASTO);
      
      // Reseteamos formularios

      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0
      }


    }
  
}
