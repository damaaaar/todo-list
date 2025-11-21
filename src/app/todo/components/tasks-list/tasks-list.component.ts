import { Component, Input } from '@angular/core'

import { Task } from '../../interfaces/task'

@Component({
  selector: 'todo-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  @Input()
  public taskList: Task[] = []
}
