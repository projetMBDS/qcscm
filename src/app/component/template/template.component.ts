import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  @Input() name:string;
  @Input() id: string;
  @Output() idToModify = new EventEmitter<string>();
  @Output() idToDelete = new EventEmitter<string>();
  templates=[];

  constructor(private storage: Storage,public router: Router) {
    
   }

  ngOnInit() {}

  AddControle(slidingItem){
   console.log("add stuff ? ")
   this.idToModify.emit("test");
   slidingItem.close();
  }

  deleteTemplate(id,slidingItem){
    slidingItem.close();
    this.idToDelete.emit(id);
  }

  



}
