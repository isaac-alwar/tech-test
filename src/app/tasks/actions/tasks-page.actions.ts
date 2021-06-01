import { createAction, props } from '@ngrx/store';
import { TaskProps } from 'src/app/shared/models';

export const enter = createAction('[Tasks Page] Enter');

export const selectTask = createAction(
  '[Tasks Page] Select Task',
  props<{ taskId: number }>()
);

export const clearSelectedTask = createAction(
  '[Tasks Page] Clear Selected Task'
);

export const createTask = createAction(
  '[Tasks Page] Create Tasks',
  props<{ task: TaskProps }>()
);

export const updateTask = createAction(
  '[Tasks Page] Update Tasks',
  props<{ taskId: number; changes: TaskProps }>()
);

export const deleteTask = createAction(
  '[Tasks Page] Delete Tasks',
  props<{ taskId: number }>()
);

export const completeTask = createAction(
  '[Tasks Page] Mark AsComplete',
  props<{ taskId: number; changes: TaskProps }>()
);
