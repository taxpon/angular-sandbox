import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSave(todo: string) {
    console.log(todo);
  }
}
