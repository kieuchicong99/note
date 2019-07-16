import { Component, OnInit } from '@angular/core';
import { Service } from './service/service';
import { Note } from './model/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public data : Note[];
  constructor(public service:Service ){
  }
  async ngOnInit(){
    this.data = await this.service.getData();
    console.log(this.data)
  }
}
