import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CanvasComponent } from './components/canvas/canvas.component';

@Component({
  selector: 'app-canvas-page',
  standalone: true,
  imports: [CommonModule, CanvasComponent],
  templateUrl: './canvas-page.component.html',
  styleUrls: ['./canvas-page.component.scss'],
})
export class CanvasPageComponent {}
