import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  nuevoTitulo: string;

  constructor(public alertCtrl: AlertController ) { }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader:'',
      message: 'Message <strong>text</strong>!!!',
      backdropDismiss: false,
      inputs:[
        {
          name:'txtTitulo',
          type:'text',
          placeholder:'Escribe un nuevo titulo'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: (datos) => {
            this.nuevoTitulo = datos.txtTitulo;
          }
        }
      ]
    });

    await alert.present();
  }


  ngOnInit() {
  }

}
