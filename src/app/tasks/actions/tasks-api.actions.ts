import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/shared/models';

export const tasksLoaded = createAction(
  '[Tasks API] Tasks Loaded Success',
  props<{ tasks: Task[] }>()
);

export const taskCreated = createAction(
  '[Tasks API] Tasks Created',
  props<{ task: Task }>()
);

export const taskUpdated = createAction(
  '[Tasks API] Tasks Updated',
  props<{ task: Task }>()
);

export const taskDeleted = createAction(
  '[Tasks API] Tasks Deleted',
  props<{ taskId: number }>()
);

export const taskCompleted = createAction(
  '[Tasks API] Task Completed',
  props<{ task: Task }>()
);
