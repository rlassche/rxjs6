import { Injectable } from '@angular/core';
//import * as Rx from 'rxjs';
import { Observable, Observer, Subject } from 'rxjs';

export interface Message {
  author: string,
  message: string
}
@Injectable()
export class WebsocketService {
  constructor() { }

  private subject: Subject<MessageEvent>;

  public connect(url): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully connected to: " + url);
    }
    return this.subject;
  }

  private create(url): Subject<MessageEvent> {
    let ws: WebSocket = new WebSocket(url);

    //
    //      OBSERVABLE
    //
    let observable = Observable.create((obs: Observer<MessageEvent>) => {
      console.log('Observable.create');
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    })

    //
    //      OBSERVER
    //
    let observer = {
      next: (data: Message) => {
        if (ws.readyState === WebSocket.OPEN) {
          console.log('observer: data: ', data);
          ws.send(JSON.stringify(data));
        }
      }
    }
    return Subject.create(observer, observable);
  }

}