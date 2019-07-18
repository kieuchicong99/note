import { Injectable } from '@angular/core';
import { Note } from '../model/note.model';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Service {

  public data: Note[];

  constructor() {

  }
  public getJSON(): Observable<any> {
    const observable = new Observable<any>(function subscribe(subscriber) {
      let note_data: Note[];
      try {
        // chrome.storage.sync.get(['note_data'], function (result) {
        //   note_data = result.note_data
        //   console.log(result)
        // });

        note_data = JSON.parse(localStorage.getItem('note_data'));
        console.log('notedata: ',note_data)

        subscriber.next(note_data);

      } catch (err) {
        subscriber.error(err);
        console.log(err)
      }
    });
    return observable
  }

  public storeJSON() {

  }
  public getData(): Promise<Array<Note>> {
    return new Promise((resolve, reject) => {
      this.getJSON().subscribe(res => {
        resolve(res)
          ,
          err => {
            reject(err)
          }
      });
    })

  }

}
