import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { PaginationComponent } from './layouts/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    SummaryComponent,
    TransportationComponent,
    HotelComponent,
    TicketComponent,
    ManagementComponent,
    RoleAccessComponent,
    WorkflowComponent,
    SettingComponent,
    HelpComponent,
    ContactUsComponent,
    WorkflowStepComponent,
    WorkflowApprovalComponent,
    LoginComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
