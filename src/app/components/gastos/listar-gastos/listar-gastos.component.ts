import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.css']
})
export class ListarGastosComponent implements OnInit, OnDestroy {
  suscription: Subscription;
  presupuesto: number;
  restante: number;
  listGastos: any[] = [];

  constructor(private _presupuestoService: PresupuestoService){
    this.presupuesto = 0;
    this.restante = 0;
   this.suscription = this._presupuestoService.getGastos().subscribe(data => {
      this.restante = this.restante - data.cantidad;
      this.listGastos.push(data);
    })

  }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }



}
