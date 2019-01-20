import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { PlaceDetailPage } from '../place-detail/place-detail';

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
data = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private  http: HttpClient) {
  }

  ionViewDidLoad() {
   this.http.post("http://10.70.44.238/touristAppApi/get-place.php",
   JSON.stringify({
     limit:3
   })
  ).subscribe((res:any)=>{
     this.data = res.data;
   })
  }
show(item){
this.navCtrl.push(PlaceDetailPage, { item:item });
    }
}
