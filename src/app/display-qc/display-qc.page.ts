import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { ModalControleComponent } from '../component/modal-controle/modal-controle.component';

@Component({
  selector: 'app-display-qc',
  templateUrl: './display-qc.page.html',
  styleUrls: ['./display-qc.page.scss'],
})
export class DisplayQcPage implements OnInit {

  searchBar:string;
  allQc=[{
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
    time:''}]

    displayedQc=[{
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
      time:''}]


      controles=[{
        idControle:'0',
        nomControle:'none',
        description:'null'
      }
    ];

 constructor(private storage: Storage,private activatedRoute: ActivatedRoute,public router: Router,public modalController: ModalController,public alertController: AlertController,public toastController: ToastController) { 
   }

 
   ngOnInit() {
    this.loadData();
  }

  async loadData(){
    this.storage.get('all.qc').then((val) => {
      if (val!=null){
        this.allQc = val;
        this.allQc.shift()
        console.log(this.allQc);
        this.displayedQc=val;
        this.displayedQc.shift()
      }
    });

    this.storage.get('controles').then((val) => {
      if (val!=null){
        this.controles=val;
      }
    });

  }

  findControles(){
    this.displayedQc=[]
    console.log(this.searchBar);
   
  
      this.allQc.forEach(element => {
        
        if(element.nomDuControle.toLowerCase().includes(this.searchBar.toLowerCase())){
          console.log(element.nomDuControle+ ' contains ' + this.searchBar)
          this.displayedQc.push(element);
        }
      });
      console.log(this.displayedQc);
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.searchBar='';
    this.loadData();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


  viewUnLock(item){
    this.presentModal(item)
  }
  

  async presentModal(item) {
    const modal = await this.modalController.create({
      component: ModalControleComponent,
      componentProps: {
        'id': item
      }
    });
    return await modal.present();
  }

  async checkControle(id){
    console.log('id to search is' + id);
    let msg:string
    let title:string
    this.controles.forEach(element => {
      if(element.idControle==id){
        msg=element.description
        title=element.nomControle
      }
      
    });
    const alert = await this.alertController.create({
      header: 'Information',
      subHeader: 'le controle '+ title,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
  

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'ce controle est verrouiller,impossible de le modifier.',
      duration: 2000
    });
    toast.present();
  }



}
