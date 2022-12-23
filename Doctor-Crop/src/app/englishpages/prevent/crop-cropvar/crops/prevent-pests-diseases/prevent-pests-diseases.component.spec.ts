import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreventPestsDiseasesComponent } from './prevent-pests-diseases.component';

describe('PreventPestsDiseasesComponent', () => {
  let component: PreventPestsDiseasesComponent;
  let fixture: ComponentFixture<PreventPestsDiseasesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventPestsDiseasesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreventPestsDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
