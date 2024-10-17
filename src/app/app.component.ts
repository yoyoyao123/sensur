import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NosserviceComponent } from './nosservice/nosservice.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, CommonModule,AcceuilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {

    texts: string[] = ["COMMUNICATION 360°", "PARTAGE" ,"VISION" , "CREATION"];
  }

