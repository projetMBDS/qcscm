import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayQcPage } from './display-qc.page';

describe('DisplayQcPage', () => {
  let component: DisplayQcPage;
  let fixture: ComponentFixture<DisplayQcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayQcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayQcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
