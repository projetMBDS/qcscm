import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss'],
})
export class ModalPageComponent implements OnInit {
  @Input() id:string;
  name:string;
  index:string;
  controlesExisting=[];
  templates=[];
  controlesOfTemplate=['1'];
  controleState = [
    {id:0,name:'none',description:'none',state:false}
  
  ];
    
    
    ;/* id / name / state*/
  constructor(private navParams: NavParams, private modalController: ModalController,private storage: Storage,public router: Router) {
    this.loadData();
  }


 display(){

 }


  async loadData(){
    this.storage.get('templates').then((val) => {
      console.log('templates is : ', val);
      if (val!=null){
        this.templates = val;
      } 
      this.templates.forEach(element => {
        if(element.idTemplate==this.id){
          this.name = element.idTemplate;
          this.index = (element.idTemplate-1).toString();
          console.log('controle of template '+ this.id +' index is : '+ this.index)
          this.controlesOfTemplate = element.controles; 
        }
  
});
      
    });
    this.storage.get('controles').then((val) => {
      console.log('controles existing : ', val);
        this.controlesExisting = val;
        this.controleState=[];
        this.controlesExisting.forEach(element => {
            if (this.controlesOfTemplate.includes(element.idControle)){
              console.log('the template have test: '+ element.nomControle);
              this.controleState.push({id:element.idControle,name:element.nomControle,description:element.description,state:true})
            }
            else{
              console.log('the template DO NOT HAVE test: '+ element.nomControle);
              this.controleState.push({id:element.idControle,name:element.nomControle,description:element.description,state:false})
            }
            
        });

      


    });
  }
  

  save(){
    this.controlesOfTemplate=[];
    this.controleState.forEach(element => {
      if(element.state){
      console.log('the template have now :  '+ element.name);
      this.controlesOfTemplate.push(element.id.toString());
      }
    
    console.log('VALUE : ' + this.controlesOfTemplate);
    console.log('template to modify : '+ this.templates[this.index].idTemplate);
  
    this.templates[this.index].controles = this.controlesOfTemplate;

    console.log('templates is now : ', this.templates[this.index]);
    this.storage.set('templates',this.templates);
    this.dismiss();
    //this.templates.push[{idControle:this.id;idTemplate:this.name;controles:this.controlesOfTemplate}];
  
});




  }

  ngOnInit() {}
  
  dismiss() {
    this.modalController.dismiss();
  }

}
