import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  private readonly oidcSecurityService = inject(OidcSecurityService);
  isAuthenticated = false;
  userName = '';
  navbarOpen = false;

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData }) => {
        this.isAuthenticated = isAuthenticated;
        this.userName = userData?.given_name || 'unkown';
      });

  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    if (window.sessionStorage) {
      window.sessionStorage.clear();
    }

    window.location.href = environment.idpLogoutUrl;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
