import { TestBed } from '@angular/core/testing';

import { WebsocketTextService } from './websocket-text.service';

describe('WebsocketTextService', () => {
  let service: WebsocketTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsocketTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
