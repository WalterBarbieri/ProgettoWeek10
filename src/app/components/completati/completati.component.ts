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

  constructor(private toDoSrv: ToDoService) { }

  ngOnInit(): void {
    this.toDoList = this.toDoSrv.getList();
    this.completedList = this.toDoList.filter((activity) => activity.completed);
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

}
