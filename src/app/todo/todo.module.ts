import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { MainPageComponent } from './pages/main-page/main-page.component'
import { TasksListComponent } from './components/tasks-list/tasks-list.component'
import { TasksFormComponent } from './components/tasks-form/tasks-form.component'

@NgModule({
  declarations: [MainPageComponent, TasksListComponent, TasksFormComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class TodoModule {}
