import { Component } from '@angular/core'

import { v4 as generateId } from 'uuid'

import { Task } from '../../interfaces/task'

@Component({
  selector: 'todo-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  public tasksList: Task[] = [
    {
      id: generateId(),
      description: 'Sacar la basura',
      priority: 10,
      done: false,
    },
    {
      id: generateId(),
      description: 'Darle de comer al gato',
      priority: 20,
      done: false,
    },
  ]
}
