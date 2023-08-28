import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowApprovalComponent } from './workflow-approval.component';

describe('WorkflowApprovalComponent', () => {
  let component: WorkflowApprovalComponent;
  let fixture: ComponentFixture<WorkflowApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkflowApprovalComponent]
    });
    fixture = TestBed.createComponent(WorkflowApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
