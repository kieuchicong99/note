import { Component, OnInit } from '@angular/core';
import { Service } from './service/service';
import { Note } from './model/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: Note[];
  constructor(public service: Service) {
  }
  public note: Note;
  public index: number;
  public temp: Note;

  public flag_add = "flag_add";

  addNote(one: Note) {
    console.log('data', this.data)
    if (this.data != undefined) {
      this.data.unshift(one)
    }
    else {
      this.data = [one];
    }

    localStorage.setItem('note_data', JSON.stringify(this.data))

  }

  delete(index: number) {
    this.data.splice(index, 1);
    localStorage.setItem('note_data', JSON.stringify(this.data))
  }


  public newNote: Note = {

    status: true,
    key_word: '',
    content: '',
    time: ''
  };

  fullEdit(note: Note, i: number) {

    let temp_str = JSON.stringify(note);
    this.temp = JSON.parse(temp_str)
    this.index = i;
    let note_str = JSON.stringify(note);
    this.note = JSON.parse(note_str);
  }

  async ngOnInit() {
    this.data = await this.service.getData();
    console.log(this.data)
    // console.log(chrome.storage);
  }
}
