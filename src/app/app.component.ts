import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.reset.css',
  './app.component.css',
],
})
export class AppComponent {
  title = 'Todo List';

  todos = [
    {name: 'first'},
    {name: 'second'},
    {name: 'third'}
  ];

  newTodo = '';
  addTodo() {
    const t = { name: this.newTodo, done: false };
    this.todos.push(t);
    this.newTodo = '';
  }

}
