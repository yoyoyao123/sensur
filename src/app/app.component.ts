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
  currentText: string = '';

  ngOnInit(): void {
    this.currentText = this.texts[this.currentTextIndex];
  }

  ngAfterViewInit(): void {
    this.startTextRotation();
  }

  startTextRotation(): void {
    setInterval(() => {
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      this.currentText = this.texts[this.currentTextIndex];
    }, 5000);
  }

}

