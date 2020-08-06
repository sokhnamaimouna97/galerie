import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailphotoComponent } from './detailphoto.component';

describe('DetailphotoComponent', () => {
  let component: DetailphotoComponent;
  let fixture: ComponentFixture<DetailphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailphotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
