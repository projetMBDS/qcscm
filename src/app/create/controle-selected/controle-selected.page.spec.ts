import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControleSelectedPage } from './controle-selected.page';

describe('ControleSelectedPage', () => {
  let component: ControleSelectedPage;
  let fixture: ComponentFixture<ControleSelectedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleSelectedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControleSelectedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
