import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAccessComponent } from './role-access.component';

describe('RoleAccessComponent', () => {
  let component: RoleAccessComponent;
  let fixture: ComponentFixture<RoleAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleAccessComponent]
    });
    fixture = TestBed.createComponent(RoleAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
