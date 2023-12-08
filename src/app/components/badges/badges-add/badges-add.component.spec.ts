import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesAddComponent } from './badges-add.component';

describe('BadgesAddComponent', () => {
  let component: BadgesAddComponent;
  let fixture: ComponentFixture<BadgesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
