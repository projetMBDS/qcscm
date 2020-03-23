import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { formatDate } from '@angular/common';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-controle-selected',
  templateUrl: './controle-selected.page.html',
  styleUrls: ['./controle-selected.page.scss'],
})
export class ControleSelectedPage implements OnInit {
  id:string;
  nom:string;
  nomDuControle:string;
  auteur:string;
  controleId:string;
  lock:boolean

  date = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  time = formatDate(new Date(), 'hh:mm:ss', 'en');
  templates = [
    {
      idTemplate:"1",
      nomTemplate:"",
      controles:[]
    }
  ];

  controles=[{
    idControle:"0",
    nomControle:"none",
    description:"null"
  }
];

controlesToDisplay=[{
  idControle:"0",
  nomControle:"none",
  description:"null"
}
];


newQc=[{
  idQc:"0",
  idTemplate:"0",
  nomDuControle:"",
  idControles:[{
    id:"",
    nomControle:"",
    reponse:false
  }],
  auteur:"",
  date:"",
  time:"",
  lock:false
}]

qcControle=[{idQc:"0",
idTemplate:"0",
nomDuControle:"",
idControles:[{
  id:"",
  nomControle:"",
  reponse:false
}],
auteur:"",
date:"",
time:"",
lock:false}]

allQc=[{
idQc:"0",
idTemplate:"0",
nomDuControle:"",
idControles:[{
  id:"",
  nomControle:"",
  reponse:false
}],
auteur:"",
date:"",
time:"",
lock:false}]



  constructor(private storage: Storage,private activatedRoute: ActivatedRoute,public router: Router,public alertController: AlertController) { 
   }

  ngOnInit() {
    this.storage.get('id.controle.selected').then((val) => {
      this.id = val;
      console.log(this.id);
    });

    this.storage.get('nom.controle.selected').then((val) => {
      this.nom = val;
    });

    this.storage.get('all.qc').then((val) => {
      if (val!=null){
        this.allQc = val;
        console.log(this.allQc);
      }
    });

    this.storage.get('user.name').then((val) => {
      this.auteur = val;
      console.log(this.auteur);
    });



      this.loadData();
  }

  async loadData(){
    this.storage.get('controles').then((val) => {
     this.controles=val;
     console.log('controles is  : ', this.controles);
      });
      
    this.storage.get('templates').then((val) => {
      console.log('templates is now : ', val);
      if (val!=null){
        this.templates = val;

      }
      this.controlesToDisplay.length = 0;
      this.templates.forEach(element => {
        if(element.idTemplate==this.id)
        

        element.controles.forEach(ctrl => {
    
          this.controles.forEach(exctrl => {
            if(exctrl.idControle==ctrl){
              this.controlesToDisplay.push(exctrl);
            }
          });
        

        });

        
      });
  


    });



  }

  saveInformation(){
    let tmpId:string
    /*
newQc=[{
  idQc:"0",
  idTemplate:"0",
  nomDuControle:"",
  idControles:{
    id:"",
    reponse:false
  },
  auteur:"",
  date:"",
  time:""
}]*/

console.log("nom controle : "+ this.nomDuControle)
if (this.allQc==null){
  console.log("id : " +1)
  tmpId="1"
}
else {
  console.log("id : " + this.allQc.length +1)
  tmpId = (this.allQc.length +1).toString();
}

this.controleId = tmpId;

this.newQc=[];
console.log(this.controlesToDisplay);
let tmpControle=[{id:"",
nomControle:"",
reponse:false}]

this.controlesToDisplay.forEach(element => {
  console.log(element.idControle+":"+element.nomControle)
  tmpControle.push({id:element.idControle,nomControle:element.nomControle,reponse:false})
});

this.newQc.push({
  idQc:tmpId,
  idTemplate:this.id,
  nomDuControle:this.nomDuControle,
  idControles:tmpControle,
  auteur:this.auteur,
  date:this.date,
  time:this.time,
  lock:this.lock
})
  console.log(this.newQc);
  this.qcControle[0].idControles=tmpControle;
  this.qcControle[0].idControles.shift();

  }

  async presentAlert() {
    if(this.lock){
      const alert = await this.alertController.create({
        header: 'Attention',
        subHeader: 'vous verouiller ce controle',
        message: 'Un controle verouiller ne peut plus être modifier par la suite.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    
  }


  validate(){

    console.log(this.newQc[0]);
    
      this.allQc.push({
        idQc:this.newQc[0].idQc,
        idTemplate:this.newQc[0].idTemplate,
        nomDuControle:this.newQc[0].nomDuControle,
        idControles:this.newQc[0].idControles,
        auteur:this.newQc[0].auteur,
        date:this.newQc[0].date,
        time:this.newQc[0].time,
        lock:this.lock
      }



      );
  
    console.log(this.allQc);
    this.storage.set('all.qc',this.allQc)
    this.router.navigate(['/display-qc']);

  }




 
}
