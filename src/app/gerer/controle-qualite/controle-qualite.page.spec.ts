import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControleQualitePage } from './controle-qualite.page';

describe('ControleQualitePage', () => {
  let component: ControleQualitePage;
  let fixture: ComponentFixture<ControleQualitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleQualitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControleQualitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
