import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username:string;


  constructor(private storage: Storage,public router: Router) { 
    storage.get('user.name').then((val) => {
      this.username = val;
    });
  }


  logout(){
    this.storage.set('force-login',false);
    this.router.navigate(['/login']);
  }

  createQc(){
    console.log('createQC')
    this.router.navigate(['/controle-qualite']);
  }

  seeQc(){
    this.router.navigate(['/display-qc']);
  }

  modifyTempaltes(){
    this.router.navigate(['/templates']);
  }

  modifyControles(){
    this.router.navigate(['/gerer-controle-qualite']);
  }






}
