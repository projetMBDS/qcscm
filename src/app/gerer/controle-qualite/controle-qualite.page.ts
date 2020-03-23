import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-controle-qualite',
  templateUrl: './controle-qualite.page.html',
  styleUrls: ['./controle-qualite.page.scss'],
})
export class ControleQualitePage implements OnInit {
  controles = [
    {
    idControle:"1",
    nomControle:"none",
    description:'none'
  }
  /*{
    idControle:"2",
    nomControle:"controles des boutons",
    description:""description
  },
  {
    idControle:"3",
    nomControle:"controles des tailles"
  }*/
  ];

  nomControle:string;
  description: string;

  constructor(private storage: Storage,public router: Router) { 
    this.loadData();
  }


  doRefresh(event) {
    console.log('Begin async operation');
    this.storage.get('controles').then((val) => {
      console.log('controles is : ', val);
      if (val!=null){
        this.controles = val;
      }
      
    });
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async loadData(){
    this.storage.get('controles').then((val) => {
      console.log('controles is : ', val);
      if (val!=null){
        this.controles = val;
      }
      
    });
  }
  ngOnInit() {
  }

addControle(){
  let id;
  if (this.controles==null){
     id = (1).toString();
  }
  else{
   id = (this.controles.length+1).toString();
  }
  
  this.controles.push({idControle:id,nomControle:this.nomControle,description:this.description});
  this.nomControle=""; //empty the inputbox
  this.description="" //empty inpu
  this.storage.set('controles', this.controles);
  console.log(this.controles);

}


}
