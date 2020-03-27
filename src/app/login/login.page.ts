import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
// --------
import { ToastController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private storage: Storage,public router: Router,
    public toastController: ToastController,
    private plt: Platform,) { 
     

    }
  id:string;
  password:string;
  stayConnected:boolean;

  // todo : user webservice to get the user / or only use sql request specific
  users = [
    {
      id:'axel.verrons@gmail.com',
      password:'pass',
      name:'axel verrons'
    },
    {
      id:'anis.djadour@allemande.com',
      password:'pass',
      name:'Anis Djadour'
    }
  ]


  ngOnInit() {
  this.storage.get('force.login').then((val) => {
  if (val==null){
    this.stayConnected=false;
  }
  if (val==true){
    this.router.navigate(['/home']);
  }
  else{
    this.stayConnected=false;
  }
});

  }


  login(){
    console.log('Connexion started');
    let result:Boolean
    this.users.forEach(element => {
      if (element.id==this.id && element.password == this.password){
        result=true;
        console.log('Connexion autorized');
        this.storage.set('force.login',this.stayConnected);
        console.log('LOGIN VALUE is' + this.stayConnected);
        //SAVE INTO DATA BASE 
        this.storage.set('user.name', element.name);
        this.storage.set('user.id', element.id);
        this.router.navigate(['/home']);
        //DO routing 
      }
    });
    if(!result){
      this.presentToast('Erreur d\'identification')
    }
   

  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  
}
