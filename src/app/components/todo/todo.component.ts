import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/modules/to-do.interface';
import { ToDoService } from 'src/app/service/to-do.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  isLoading = true;

  addLoading = false;

  title: string = '';

  toDoList: ToDo[] = [];

  constructor(private toDoSrv: ToDoService) { }

  ngOnInit(): void {
    this.toDoList = this.toDoSrv.getList();
    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
  }

  isInputEmpty(): boolean {
    return this.title.trim().length === 0;
  }


  newTask(title: string) {
    this.addLoading = true;
    this.toDoSrv.updatelist(title);
    console.log(this.toDoList);
    setTimeout(() => {
      this.addLoading = false;
      this.title = '';
  }, 2000)

  }

  complete(activity: ToDo) {
    activity.completeloading = true;
    setTimeout(() => {
      activity.completed = true;
      activity.completeloading = false;
    }, 2000)
  }
}
