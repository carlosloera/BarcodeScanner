import { HistorialProvider } from './../../providers/historial/historial';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public historialLista  = [];
  constructor(public navCtrl: NavController, public historialProvider:HistorialProvider) {
    
  }
  ionViewDidLoad(){
    this.historialLista = this.historialProvider._historial;
    console.log(this.historialLista);
  }

}
