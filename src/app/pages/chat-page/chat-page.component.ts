import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextareaComponent } from './components/textarea/textarea.component';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [CommonModule, TextareaComponent],
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent {}
