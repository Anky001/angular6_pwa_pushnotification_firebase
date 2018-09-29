import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlubComponent } from './blub.component';

describe('BlubComponent', () => {
  let component: BlubComponent;
  let fixture: ComponentFixture<BlubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
