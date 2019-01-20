import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacePage } from '../place/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
name : string ="smith";
lname:string="Jorn";
  constructor(public navCtrl: NavController) {

  }
  show() {
    let num = 10;
    alert(this.name+" "+this.lname);
  }
  gotoplace(){
    this.navCtrl.push(PlacePage);
  }
}
