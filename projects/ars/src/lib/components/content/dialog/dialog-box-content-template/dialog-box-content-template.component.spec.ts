import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxContentTemplateComponent } from './dialog-box-content-template.component';

describe('DialogBoxContentTemplateComponent', () => {
  let component: DialogBoxContentTemplateComponent;
  let fixture: ComponentFixture<DialogBoxContentTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBoxContentTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxContentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
