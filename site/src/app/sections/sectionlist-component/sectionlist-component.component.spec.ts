import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionlistComponentComponent } from './sectionlist-component.component';

describe('SectionlistComponentComponent', () => {
  let component: SectionlistComponentComponent;
  let fixture: ComponentFixture<SectionlistComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionlistComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionlistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
