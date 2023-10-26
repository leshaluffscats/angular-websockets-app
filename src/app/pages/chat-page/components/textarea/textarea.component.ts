import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HightlightKeywordsDirective } from 'src/app/shared/directives/hightlight-keywords.directive';
import { WebsocketTextService } from 'src/app/shared/services/websocket-text.service';

@UntilDestroy()
@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HightlightKeywordsDirective],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements OnInit {
  public parentTextArea: FormControl = new FormControl('');
  public childTextArea: FormControl = new FormControl('');

  constructor(private wsTextService: WebsocketTextService) {}

  public ngOnInit(): void {
    this.wsTextService.socket$.pipe(untilDestroyed(this)).subscribe();

    this.parentTextArea.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(data => this.wsTextService.sendMessage(data));

    this.wsTextService
      .onMessage()
      .pipe(untilDestroyed(this))
      .subscribe(value => this.childTextArea.setValue(value));
  }
}
