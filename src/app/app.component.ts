import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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

