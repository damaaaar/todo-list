import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component'

@NgModule({
  declarations: [MainPageComponent, TasksListComponent],
  exports: [MainPageComponent],
  imports: [CommonModule],
})
export class TodoModule {}
