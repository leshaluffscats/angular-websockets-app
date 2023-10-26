import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebsocketTextService {
  public socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:3000/');
  }

  sendMessage(message: string): void {
    this.socket$.next(message);
  }

  onMessage(): WebSocketSubject<any> {
    return this.socket$;
  }
}
