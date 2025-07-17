import { Component, inject, OnInit } from '@angular/core';
import { HelloService } from './hello.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent implements OnInit {
  response: string = 'Click the button';

  private helloService = inject(HelloService);
  private readonly oidcSecurityService = inject(OidcSecurityService);
  accessToken = '';

  ngOnInit() {
    this.oidcSecurityService.getAccessToken()
      .subscribe(accessToken => this.accessToken = accessToken);
  }

  getHello(): void {
    this.helloService.getHello().subscribe({
      next: (hello) => {
        console.log(hello);
        this.response = hello;
      },
      error: (error) => {
        this.response = error.message || 'An error occurred';;
      }
    });
  }
}
