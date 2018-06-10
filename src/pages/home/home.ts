import { HistorialProvider } from './../../providers/historial/historial';
import { Component } from '@angular/core';
import { NavController, Toast, Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public barcodeScanner:BarcodeScanner,
              public toastCtrl:ToastController, 
              public platform:Platform,
              public hitorialProvider:HistorialProvider) {

  }

  scan(){

    if( !this.platform.is('cordova') ){

      this.hitorialProvider.agregar_historial("http");

    }

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.mostrarError("Error: ");
     }).catch(err => {
         console.error('Error', err);
         this.mostrarError("Error: "+err);
     });
  }

  mostrarError(mensaje:string){

    const toast = this.toastCtrl.create({
      message: mensaje,
      duration:3000
    });
    toast.present();

  }

}
