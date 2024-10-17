import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {
  texts: string[] = ["COMMUNICATION 360°", "PARTAGE", "VISION", "CREATION"];
  currentTextIndex: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startTextRotation();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startTextRotation(): void {
    this.intervalId = setInterval(() => {
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
    }, 2000);
  }
}