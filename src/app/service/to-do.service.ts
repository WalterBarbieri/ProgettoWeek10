import { Injectable } from '@angular/core';
import { ToDo } from '../modules/to-do.interface';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  toDoList: ToDo[] = [];

  i: number = 0;

  constructor() {}

  getList() {
    return this.toDoList;
  }
  updatelist(title: string) {
    this.i++;
    setTimeout(() => {
      this.toDoList.push({id: this.i, title, completed: false, completeloading: false})
    }, 2000)
  }
}
