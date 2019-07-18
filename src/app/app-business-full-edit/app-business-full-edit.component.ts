import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Note } from '../model/note.model';

@Component({
  selector: 'app-business-full-edit',
  templateUrl: './app-business-full-edit.component.html',
  styleUrls: ['./app-business-full-edit.component.css']
})
export class AppBusinessFullEditComponent implements OnInit {

  constructor() { }
  public flag_add = "flag_add";
  public flag_edit = "flag_edit";
  public storeNote : Note;

  @Input() flag : string;
  @Input() note : Note;
  @Output() edit = new EventEmitter<Note>()
  @Output() addNew= new EventEmitter<Note>();

  add(){
    let note_str = JSON.stringify(this.note);
    this.storeNote = JSON.parse(note_str);
    this.addNew.emit(this.storeNote);
  }

  update(){
    this.edit.emit(this.note)
  }

  ngOnInit() {
  }

}
