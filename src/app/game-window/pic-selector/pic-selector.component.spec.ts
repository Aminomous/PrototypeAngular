import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicSelectorComponent } from './pic-selector.component';

describe('PicSelectorComponent', () => {
  let component: PicSelectorComponent;
  let fixture: ComponentFixture<PicSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
