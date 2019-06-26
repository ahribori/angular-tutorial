import { Component, OnInit } from '@angular/core';

interface Todo {
  label: string;
  done: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoText = '';
  list: Todo[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  add(todo: Todo) {
    this.list.push(todo);
    this.list = Object.assign([], this.list);
    this.todoText = '';
  }

  remove(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.add({ label: this.todoText, done: false });
    }
  }
}
