import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { fromEvent, pairwise, switchMap, takeUntil } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { colors } from '../consts/canvas.consts';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent {
  @ViewChild('canvasTag') public canvas!: ElementRef;

  public colors: { color: string; label: string }[] = colors;

  private cx: CanvasRenderingContext2D;
  private width = 500;
  private height = 400;

  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');

    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.cx.lineWidth = 2;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';

    this.captureEvents(canvasEl);
  }

  public clearCanvas(): void {
    this.cx.clearRect(0, 0, this.width, this.height);
  }

  public changeColor(color: string): void {
    this.cx.strokeStyle = color;
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    fromEvent<MouseEvent>(canvasEl, 'mousedown')
      .pipe(
        switchMap(e => {
          return fromEvent<MouseEvent>(canvasEl, 'mousemove').pipe(
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            takeUntil(fromEvent(canvasEl, 'mouseleave')),
            pairwise(),
          );
        }),
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top,
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top,
        };
        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(
    prevPos: { x: number; y: number },
    currentPos: { x: number; y: number },
  ) {
    if (!this.cx) {
      return;
    }

    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y);
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }
}
