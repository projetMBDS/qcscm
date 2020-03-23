import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-controle-qualite',
  templateUrl: './controle-qualite.page.html',
  styleUrls: ['./controle-qualite.page.scss'],
})
export class ControleQualitePage implements OnInit {

  templates = [
    {
      idTemplate:"1",
      nomTemplate:"",
      controles:[]
    }
  ];
  templatesToDisplay =[]
  controles=[{
    idControle:"0",
    nomControle:"none",
    description:"null"
  }
];
  nomTemplate:string;
  searchBar:string;

  constructor(private storage: Storage,public router: Router) { 
   
  }

  async loadData(){
    this.storage.get('controles').then((val) => {
     this.controles=val;
     console.log('controles is now : ', this.controles);
      });
      
    this.storage.get('templates').then((val) => {
      console.log('templates is now : ', val);
      if (val!=null){
        this.templates = val;

      }


      this.templates.forEach(element => {
        console.log("element is " + element.nomTemplate)
        element.controles.forEach(ctrl => {
          this.controles.forEach(exctrl => {
            if(exctrl.idControle==ctrl){
              console.log(ctrl + " : " + exctrl.nomControle);
              let index= element.controles.indexOf(ctrl)
              if (index !== -1) {
                element.controles[index] =exctrl.nomControle;
               
              }
             
            }
            
          });

          
        });
        this.templatesToDisplay.push(element);
      });
  


    });



  }

  ngOnInit() {
    this.loadData();
  }


  selectTest(item,name){
    console.log(item)

    this.storage.set('id.controle.selected',item)
    this.storage.set('nom.controle.selected',name)
    this.router.navigate(['/controle-selected']);
  
  
  }

  findTemplate(){
    this.templatesToDisplay=[]
    console.log(this.searchBar);

     
       ;
      this.templates.forEach(element => {
        
        if(element.nomTemplate.toLowerCase().includes(this.searchBar.toLowerCase())){
          console.log(element.nomTemplate+ " contains " + this.searchBar)
          this.templatesToDisplay.push(element);
        }
      });
      console.log(this.templatesToDisplay);
  
    
   


  }
}
