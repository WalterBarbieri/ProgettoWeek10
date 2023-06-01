import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoComponent } from './components/todo/todo.component';
import { CompletatiComponent } from './components/completati/completati.component';


const rotte : Route [] = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'completati',
    component: CompletatiComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoComponent,
    CompletatiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotte),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
