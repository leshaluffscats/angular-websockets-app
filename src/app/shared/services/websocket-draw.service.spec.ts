import { TestBed } from '@angular/core/testing';

import { WebsocketDrawService } from './websocket-draw.service';

describe('WebsocketDrawService', () => {
  let service: WebsocketDrawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsocketDrawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
