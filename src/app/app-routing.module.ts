import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './pages/overview/summary/summary.component';
import { TransportationComponent } from './pages/request/transportation/transportation.component';
import { HotelComponent } from './pages/request/hotel/hotel.component';
import { TicketComponent } from './pages/request/ticket/ticket.component';
import { ManagementComponent } from './pages/user/management/management.component';
import { RoleAccessComponent } from './pages/user/role-access/role-access.component';
import { WorkflowComponent } from './pages/user/workflow/workflow.component';
import { SettingComponent } from './pages/setting/setting.component';
import { HelpComponent } from './pages/help/help.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { WorkflowStepComponent } from './pages/user/workflow/workflow-step/workflow-step.component';
import { WorkflowApprovalComponent } from './pages/user/workflow/workflow-approval/workflow-approval.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'summary', component: SummaryComponent, canActivate: [authGuard] },
  {
    path: 'transportation',
    component: TransportationComponent,
    canActivate: [authGuard],
  },
  { path: 'hotel', component: HotelComponent, canActivate: [authGuard] },
  { path: 'ticket', component: TicketComponent, canActivate: [authGuard] },
  {
    path: 'management',
    component: ManagementComponent,
    canActivate: [authGuard],
  },
  {
    path: 'role-access',
    component: RoleAccessComponent,
    canActivate: [authGuard],
  },
  { path: 'workflow', component: WorkflowComponent, canActivate: [authGuard] },
  {
    path: 'workflow-step',
    component: WorkflowStepComponent,
    canActivate: [authGuard],
  },
  {
    path: 'workflow-approval',
    component: WorkflowApprovalComponent,
    canActivate: [authGuard],
  },
  { path: 'setting', component: SettingComponent, canActivate: [authGuard] },
  { path: 'help', component: HelpComponent, canActivate: [authGuard] },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
