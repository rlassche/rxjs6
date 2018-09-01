import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { WebsocketService } from './websocket.service';

const CHAT_URL = 'ws://echo.websocket.org/';

export interface Message {
	author: string,
	message: string
}

@Injectable()
export class ChatService {
	public messages 

	constructor(wsService: WebsocketService) {
    this.messages = <Subject<MessageEvent>>wsService
      .connect( CHAT_URL)
    }

}