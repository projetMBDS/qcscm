import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-controle',
  templateUrl: './controle.component.html',
  styleUrls: ['./controle.component.scss'],
})
export class ControleComponent implements OnInit {
  @Input() name:string;
  @Input() id: string;
  @Input() description:string;
  controles=[];


  constructor(private storage: Storage,public router: Router) { }

  ngOnInit() {}

  deleteControle($event,item,slidingItem){
    console.log('will try to delete controle : '+ item);
    this.storage.get('controles').then((val) => {

      val.forEach(element => {
        if (element.idControle!=item){
          this.controles.push(element)
        }
      });


      console.log('controles is now  : ', this.controles);
      console.log(this.controles);
      this.storage.set('controles',this.controles);
      //todo refresh data
      slidingItem.close();
      this.router.navigate['/home'];
    
    });
    
    

  }


  }
