import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTodo = '';
  newTodoList = [];

  addTodo(event){
    let data = {
      name: this.newTodo,
      completed: false
    }

    this.newTodoList.push(data);
    this.newTodo = '';
    event.preventDefault();
  }

  onDeleted(index){
    this.newTodoList.splice(index, 1);
  }

  onEdit(index){
    // terminar editar
  }

  onCompleted(index){
    // completar una tarea
  }

}
