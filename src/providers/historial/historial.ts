
import { Injectable } from '@angular/core';
import { ScanData } from '../../models/scan-data.model';
/*
  Generated class for the HistorialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialProvider {
  
  public _historial: ScanData[] = [];
  
  constructor() {
    
  }

  cargar_historial(){
    return this._historial;
  }

  agregar_historial(texto:string){

    let data = new ScanData(texto);
    this._historial.unshift(data);
    console.log(this._historial);

  }

}
