import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/modules/to-do.interface';
import { ToDoService } from 'src/app/service/to-do.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  title: string = '';

  toDoList: ToDo[] = [];

  constructor(private toDoSrv: ToDoService) { }

  ngOnInit(): void {
    this.toDoList = this.toDoSrv.getList();
  }

  newTask(title: string) {
    this.toDoSrv.updatelist(title);
    console.log(this.toDoList);

  }

  complete(activity: ToDo) {
    setTimeout(() => {
      activity.completed = true;
    }, 2000)
  }
}
