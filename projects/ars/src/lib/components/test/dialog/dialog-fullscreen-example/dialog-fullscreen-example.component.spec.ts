import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFullscreenExampleComponent } from './dialog-fullscreen-example.component';

describe('DialogFullscreenExampleComponent', () => {
  let component: DialogFullscreenExampleComponent;
  let fixture: ComponentFixture<DialogFullscreenExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFullscreenExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFullscreenExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
