import { Component } from '@angular/core';
import { Model, TodoItem } from './model';
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  model: Model =  new Model();

  getTodoItems(): TodoItem[] {
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItem): void {
    if (newItem != "") {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }

}
