import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { ModalPageComponent} from '../../component/modal-page/modal-page.component'


@Component({
  selector: 'app-templates',
  templateUrl: './templates.page.html',
  styleUrls: ['./templates.page.scss'],
})
export class TemplatesPage implements OnInit {
  templates = [
    {
      idTemplate:"1",
      nomTemplate:"",
      controles:[]
    }
  ];
  nomTemplate:string;

  constructor(private storage: Storage,public router: Router,public modalController: ModalController) { 
    this.loadData();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.loadData();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  loadData(){
    this.storage.get('templates').then((val) => {
      console.log('templates is : ', val);
      if (val!=null){
        this.templates = val;
      }
      
    });
  }
  
  async presentModal(item) {
    const modal = await this.modalController.create({
      component: ModalPageComponent,
      componentProps: {
        'id': item
      }
    });
    return await modal.present();
  }


  ngOnInit() {
  }
  
  test($event){
    console.log("emit recived from child : "+ $event);
    this.presentModal($event)
  }

  delete($event){
    let tmp=[]
    console.log("delete the id: "+ $event);
    this.templates.forEach(element => {
      if (element.idTemplate!=$event){
        tmp.push({idTemplate:element.idTemplate,nomTemplate:element.nomTemplate,controles:element.controles});
     }
    });

    console.log("test : "+ tmp);

    this.templates=tmp;

    
  }

  addTemplate(){
    let id;
    if (this.templates==null){
       id = (1).toString();
    }
    else{
     id = (this.templates.length+1).toString();
    }
    
    this.templates.push({idTemplate:id,nomTemplate:this.nomTemplate,controles:[]});
    this.nomTemplate=""; //empty the inputbox 
    
    this.storage.set('templates', this.templates);
    console.log(this.templates);
  }



}
