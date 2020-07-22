import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioncardsComponent } from './sectioncards.component';

describe('SectioncardsComponent', () => {
  let component: SectioncardsComponent;
  let fixture: ComponentFixture<SectioncardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectioncardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectioncardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
