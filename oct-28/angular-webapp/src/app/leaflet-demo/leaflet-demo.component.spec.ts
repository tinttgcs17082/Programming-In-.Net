import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletDemoComponent } from './leaflet-demo.component';

describe('LeafletDemoComponent', () => {
  let component: LeafletDemoComponent;
  let fixture: ComponentFixture<LeafletDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
