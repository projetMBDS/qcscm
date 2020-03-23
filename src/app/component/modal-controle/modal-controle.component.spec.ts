import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalControleComponent } from './modal-controle.component';

describe('ModalControleComponent', () => {
  let component: ModalControleComponent;
  let fixture: ComponentFixture<ModalControleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalControleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
