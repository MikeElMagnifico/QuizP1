import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InformacionPage } from '../informacion/informacion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Casas = []
  CasaP = InformacionPage;
  constructor(public navCtrl: NavController, public http: HttpClient) {
      this.http.get('/v1/api/pin-data?url=/s-renta-inmuebles/guadalajara-y-zona-metro/v1c1098l10567p1&geo=(21.10631012145462,-102.42214381725364),(20.21712862656199,-104.32387728274637)')
      .subscribe(data =>{
        if(data.hasOwnProperty('ads')){
          console.log(JSON.stringify(data));
          this.Casas = data['ads'];
        }

      },
      error => {console.log(JSON.stringify(error))}
      )
  }
//El titulo se encuentra en c.geo.displayName
//La ubicacion se encuentra en c.geo.name
//El precio se encuentra en c.price.formattedAmount
//La imagen se encuentra en c.pictures[0].url
VerCasa(casa){
  this.navCtrl.push(this.CasaP, {casa: casa})
}

}
