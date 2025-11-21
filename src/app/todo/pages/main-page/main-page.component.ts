import { Component, Output } from '@angular/core'

import { TodoService } from '../../services/todo.service'
import { Task } from '../../interfaces/task'

@Component({
  selector: 'todo-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private todoService: TodoService) {}

  @Output()
  public taskList: Task[] = [...this.todoService.tasks]
}
