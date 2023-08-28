import { Component, Renderer2, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnDestroy {
  showSidebar: boolean = true;
  subcription: Subscription;

  constructor(
    private renderer: Renderer2,
    private sidebarService: SidebarService,
    private authService: AuthService
  ) {
    this.subcription = this.sidebarService.showSidebar.subscribe((value) => {
      this.showSidebar = value;
    });
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');

    if (sidebar) {
      if (sidebar.classList.contains('hide')) {
        this.renderer.removeClass(sidebar, 'hide');
      } else {
        this.renderer.addClass(sidebar, 'hide');
      }

      console.log('ok');
    }
  }

  logout(){
    this.authService.logout();
  }
}
