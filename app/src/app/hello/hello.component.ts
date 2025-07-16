import { Component, inject } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {
  response: string = 'Click the button';
  
  private helloService = inject(HelloService);

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
