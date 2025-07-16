import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frigo';
  private readonly oidcSecurityService = inject(OidcSecurityService);
  isAuthenticated = false;

  ngOnInit() {
    this.oidcSecurityService
    .checkAuth()
    .subscribe(({ isAuthenticated, accessToken }) => {
        console.log('app authenticated', isAuthenticated);
        console.log(`Current access token is '${accessToken}'`);
        this.oidcSecurityService.isAuthenticated$.subscribe(
          ({ isAuthenticated }) => {
            this.isAuthenticated = isAuthenticated;
          }
        );
      });
    
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }
}
