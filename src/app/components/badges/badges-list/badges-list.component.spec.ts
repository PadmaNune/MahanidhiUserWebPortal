import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesListComponent } from './badges-list.component';

describe('BadgesListComponent', () => {
  let component: BadgesListComponent;
  let fixture: ComponentFixture<BadgesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
