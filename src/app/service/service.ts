import { Injectable } from '@angular/core';
import { Note } from '../model/note.model';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Service {

  public data: Note[];
  private _jsonURL = '../../assets/data.json';

  constructor(private http: HttpClient) {

  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL)
  }

  public storeJSON(){
    
  }
  public getData(): Promise<Array<Note>> {
    return new Promise((resolve, reject) => {
      this.getJSON().subscribe(res => {
        resolve(res.values)
          ,
          err => {
            reject(err)
          }
      });
    })

  }

}
