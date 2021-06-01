import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, exhaustMap, concatMap } from 'rxjs/operators';
import { TasksService } from '../shared/services/tasks.service';
import { TasksPageActions, TasksApiActions } from './actions';

@Injectable()
export class TasksApiEffects {
  constructor(private tasksService: TasksService, private actions$: Actions) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksPageActions.enter),
      exhaustMap(() =>
        this.tasksService
          .getTasks()
          .pipe(map(tasks => TasksApiActions.tasksLoaded({ tasks })))
      )
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksPageActions.createTask),
      concatMap(action =>
        this.tasksService
          .add(action.task)
          .pipe(map(task => TasksApiActions.taskCreated({ task })))
      )
    )
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksPageActions.updateTask),
      concatMap(action =>
        this.tasksService
          .update(action.taskId, action.changes)
          .pipe(map((task) => TasksApiActions.taskUpdated({ task })))
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksPageActions.deleteTask),
      mergeMap(action =>
        this.tasksService
          .delete(action.taskId)
          .pipe(
            map(() => TasksApiActions.taskDeleted({ taskId: action.taskId }))
          )
      )
    )
  );
}
