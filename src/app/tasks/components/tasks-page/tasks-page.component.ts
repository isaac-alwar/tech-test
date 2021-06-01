import { selectTasksCount } from './../../../shared/state/index';
import { TasksPageActions } from 'src/app/tasks/actions';
import { selectAllTasks, selectActiveTask } from '../../../shared/state/index';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Task, TaskProps } from 'src/app/shared/models/task.model';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/shared/state';
import { selectTaskCount } from 'src/app/shared/state/tasks.reducer';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {
  tasks$: Observable<Task[]>;
  currentTask$: Observable<Task | null>;
  total$: Observable<number>;

  constructor(private store: Store<State>) {
    this.tasks$ = store.select(selectAllTasks);
    this.currentTask$ = store.select(selectActiveTask);
    // this.total$ = store.select(selectTasksCount);
  }

  ngOnInit() {
    this.store.dispatch(TasksPageActions.enter());
  }

  onSelect(task: Task) {
    this.store.dispatch(TasksPageActions.selectTask({ taskId: task.id}));
  }

  onCancel() {
    this.removeSelectedTask();
  }

  removeSelectedTask() {
    this.store.dispatch(TasksPageActions.clearSelectedTask());
  }

  onSave(task: TaskProps | Task) {
    if ('id' in task) {
      this.updateTask(task);
    } else {
      this.saveTask(task);
    }
  }

  saveTask(taskProps: TaskProps) {
    this.store.dispatch(TasksPageActions.createTask({ task: taskProps }));
  }

  updateTask(task: Task) {
    this.store.dispatch(
      TasksPageActions.updateTask({ taskId: task.id, changes: task })
    );
  }

  onDelete(task: Task) {
    this.store.dispatch(TasksPageActions.deleteTask({ taskId: task.id }));
  }

  onDone(task: Task) {
    if (task.done === 'false') {
      task.done = Date.now().toString();
      this.store.dispatch(TasksPageActions.completeTask({taskId: task.id, changes: task}))
    }
  }
}


