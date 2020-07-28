import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email:string;
  password:string;

  constructor(public navCtrl: NavController) {}
  
  
  login(){
console.log("Email:"+this.email);
console.log("Password:"+ this.password);
  }
 

}
