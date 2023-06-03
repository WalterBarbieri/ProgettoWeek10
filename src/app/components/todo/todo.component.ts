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

  removing = false;

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
    if (this.removing) {
      return;
    }
    this.removing = true;
    activity.completeloading = true;
    setTimeout(() => {
      activity.completed = true;
      activity.completeloading = false;
      this.removing = false;
    }, 2000)
  }

  remove(activity: ToDo) {
    if (this.removing) {
      return;
    }
    this.removing = true;
    activity.removeloading = true;
    const index = this.toDoList.indexOf(activity);
    setTimeout(() => {
      this.toDoList.splice(index, 1);
      activity.removeloading = false;
      this.removing = false;
    }, 2000)
  }
}
