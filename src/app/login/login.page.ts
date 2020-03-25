import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private storage: Storage,public router: Router) { }
  id:string;
  password:string;
  stayConnected:boolean;
  // todo : user webservice to get the user / or only use sql request specific
  users = [
    {
      id:'axel.verrons@gmail.com',
      password:"pass",
      name:"axel verrons"
    },
    {
      id:"anis.djadour@allemande.com",
      password:"pass",
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
    console.log("Connexion started");
    this.storage.set('force.login',this.stayConnected);
    this.users.forEach(element => {
      if (element.id==this.id && element.password == this.password){
        console.log("Connexion autorized");
        //SAVE INTO DATA BASE 
        this.storage.set('user.name', element.name);
        this.storage.set('user.id', element.id);
        this.router.navigate(['/home']);
        //DO routing 


      }
    });



  }

}
