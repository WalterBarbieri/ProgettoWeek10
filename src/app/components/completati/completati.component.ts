import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/modules/to-do.interface';
import { ToDoService } from 'src/app/service/to-do.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  isLoading = true;

  toDoList: ToDo[] = [];

  completedList: ToDo[] = [];

  onLoading = false;

  constructor(private toDoSrv: ToDoService) { }

  ngOnInit(): void {
    this.toDoList = this.toDoSrv.getList();
    this.completedList = this.toDoList.filter((activity) => activity.completed);
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  back(activity: ToDo) {
    if (this.onLoading) {
      return;
    }
    this.onLoading = true;
    activity.completeloading = true;
    setTimeout(() => {
      activity.completed = false;
      activity.completeloading = false;
      this.onLoading = false;
      this.refreshLists();
    }, 2000)
  }

  remove(activity: ToDo) {
    if (this.onLoading) {
      return;
    }
    this.onLoading = true;
    activity.removeloading = true;
    const index = this.toDoList.indexOf(activity);
    const index2 = this.completedList.indexOf(activity);
    setTimeout(() => {
      this.toDoList.splice(index, 1);
      this.completedList.splice(index2, 1);
      activity.removeloading = false;
      this.onLoading = false;
    }, 2000)
  }

  private refreshLists() {
    this.toDoList = this.toDoSrv.getList();
    this.completedList = this.toDoList.filter((activity) => activity.completed);
  }
}
