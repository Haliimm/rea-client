import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  processing = false;
  showSuccessMessage = false;

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private navbarService: NavbarService,
    private sidebarService: SidebarService,
    private renderer: Renderer2,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navbarService.hide();
    this.sidebarService.hide();

    const sidebar = document.querySelector('.sidebar');

    if (sidebar) {
      if (sidebar.classList.contains('hide')) {
        this.renderer.removeClass(sidebar, 'hide');
      } else {
        2;
        this.renderer.addClass(sidebar, 'hide');
      }

      console.log('ok');
    }
  }

  ngOnDestroy(): void {
    this.navbarService.display();
    this.sidebarService.display();
  }

  login() {
    this.processing = true;
    this.showSuccessMessage = false;

    let user = this.authService.login(
      this.form.value.username,
      this.form.value.password
    );

    if (!user) {
      setTimeout(() => {
        this.form.reset();
        this.processing = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid Username or Password!',
        });
      }, 1000);
    } else {
      setTimeout(() => {
        this.form.reset();
        this.processing = false;
        this.showSuccessMessage = true;

        setTimeout(() => {
          this.showSuccessMessage = false;
          this.router.navigate(['/summary']);
        }, 2000);
      }, 4000);
    }
  }
}
