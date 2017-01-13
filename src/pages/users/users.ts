import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WikiService } from '../../providers/wiki-service';


/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
  providers: [WikiService]
})
export class UsersPage {
public people : any;
  constructor(public wikiService: WikiService, navCtrl: NavController, public navParams: NavParams) {
      this.loadPeople();
  }

  loadPeople(){
    this.wikiService.load()
    .then(data => {
      this.people = data;
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Users Page');
  }

}
