import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import {Storage} from '@ionic/storage'
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-controle',
  templateUrl: './modal-controle.component.html',
  styleUrls: ['./modal-controle.component.scss'],
})
export class ModalControleComponent implements OnInit {
  @Input() id:string;
  lock:boolean
  idControle:string;
  Qc={
    idQc:'0',
    idTemplate:'0',
    nomDuControle:'',
    idControles:[{
      id:'',
      nomControle:'',
      reponse:false
    }],
    auteur:'',
    date:'',
    time:'',
  lock:false}

    allQc = [{
      idQc:'0',
      idTemplate:'0',
      nomDuControle:'',
      idControles:[{
        id:'',
        nomControle:'',
        reponse:false
      }],
      auteur:'',
      date:'',
      time:'',
      lock:false}
    ]

    controles = [
      {
      idControle:'1',
      nomControle:'none',
      description:'none'
    }
    ];


  constructor(private modalController: ModalController,private storage: Storage,public router: Router,public alertController: AlertController) {

  }

  ngOnInit() {
    this.loadData();
  }

    
  dismiss() {
    this.modalController.dismiss();
  }

  async loadData(){
    this.storage.get('all.qc').then((val) => {
    val.forEach(element => {
      if(element.idQc==this.id){
        this.Qc=element;
        console.log(this.Qc);
      }
      
    });
      });
      
      this.storage.get('all.qc').then((val) => {
        this.allQc=val          
        }); 

      this.storage.get('controles').then((val) => {
        console.log('controles is : ', val);
        if (val!=null){
          this.controles = val;          }
          
        });

    }


    save(){
      let tmp= [{
        idQc:'0',
        idTemplate:'0',
        nomDuControle:'',
        idControles:[{
          id:'',
          nomControle:'',
          reponse:false
        }],
        auteur:'',
        date:'',
        time:'',
      lock:false
    }]

      tmp.length=0;
      this.allQc.forEach(element => {
        
        
        if(element.idQc==this.id){
          tmp.push({
              idQc:this.Qc.idQc,
              idTemplate:this.Qc.idTemplate,
              nomDuControle:this.Qc.nomDuControle,
              idControles:this.Qc.idControles,
              auteur:this.Qc.auteur,
              date:this.Qc.date,
              time:this.Qc.time,
              lock:this.lock
            });
          }
          else {tmp.push(element);}
      });


      console.log(tmp);

      this.storage.set('all.qc',tmp);

      this.dismiss();


    }

    async presentAlert() {
      if(this.lock){
        const alert = await this.alertController.create({
          header: 'Attention',
          subHeader: 'vous verrouiller ce controle',
          message: 'Un controle verrouiller ne peut plus être modifier par la suite.',
          buttons: ['OK']
        });
    
        await alert.present();
      }
      
    }

    addControle(){
      console.log('add controle '+ this.idControle);

      this.controles.forEach(element => {
        if(element.idControle==this.idControle){
          this.Qc.idControles.push({id:element.idControle,
            nomControle:element.nomControle,
            reponse:false
            })
        }
      });

      this.idControle=''



      



    }
}
