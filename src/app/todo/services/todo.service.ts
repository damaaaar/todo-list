import { Injectable } from '@angular/core'

import { v4 as generateId } from 'uuid'

import { Task } from '../interfaces/task'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public tasks: Task[] = [
    {
      id: generateId(),
      description: 'Esta es una tarea de placeholder',
      priority: 0,
      done: false,
    },
    {
      id: generateId(),
      description: 'Esta también es una tarea de placeholder',
      priority: 0,
      done: false,
    },
  ]

  public deleteTaskById(task_id: string): void {
    const newTaskList = this.tasks.filter((task) => {
      return task.id !== task_id
    })

    this.tasks = newTaskList
  }
}
