import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nosservice',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink],
  templateUrl: './nosservice.component.html',
  styleUrl: './nosservice.component.css'
})
export class NosserviceComponent {

 

}
