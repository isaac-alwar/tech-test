import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material.module';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksPageComponent } from './components/tasks-page/tasks-page.component';
import { TasksApiEffects } from './tasks-api-effects';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([{ path: 'tasks', component: TasksPageComponent }]),
    EffectsModule.forFeature([TasksApiEffects])
  ],
  declarations: [
    TasksPageComponent,
    TaskDetailComponent,
    TasksListComponent,
    // TasksTotalComponent
  ]
})
export class TasksModule {}
