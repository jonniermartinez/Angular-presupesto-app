import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent {
    cantidad : number ;
    cantidaIncorrecta: boolean;

    constructor(private _presupuestoService: PresupuestoService, private router: Router){
      this.cantidad = 0;
      this.cantidaIncorrecta = false;
    }
    agregar(){
     if (this.cantidad > 0){
       this.cantidaIncorrecta = false;
       this._presupuestoService.presupuesto = this.cantidad;
       this._presupuestoService.restante = this.cantidad;
       this.router.navigate(['/gastos']);
      }else{
        this.cantidaIncorrecta = true;
      }
    }
}
