import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoComponentComponent } from './piano-component.component';

describe('PianoComponentComponent', () => {
  let component: PianoComponentComponent;
  let fixture: ComponentFixture<PianoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
