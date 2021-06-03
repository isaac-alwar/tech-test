import { taskUpdated } from './../../tasks/actions/tasks-api.actions';
import { createReducer, on, Action, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Task } from 'src/app/shared/models';
import { TasksPageActions, TasksApiActions } from '../../tasks/actions';

export interface State extends EntityState<Task> {
  activeTaskId: number | null;
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: State = adapter.getInitialState({
  activeTaskId: null
});

export const tasksReducer = createReducer(
  initialState,
  on(TasksPageActions.clearSelectedTask, TasksPageActions.enter, state => {
    return {
      ...state,
      activeTaskId: null
    };
  }),
  on(TasksPageActions.selectTask, (state, action) => {
    return {
      ...state,
      activeTaskId: action.taskId
    };
  }),
  on(TasksApiActions.tasksLoaded, (state, action) => {
    return adapter.addAll(action.tasks, state);
  }),
  on(TasksApiActions.taskCreated, (state, action) => {
    return adapter.addOne(action.task, {
      ...state,
      activeTaskId: null
    });
  }),
  on(TasksApiActions.taskUpdated, (state, action) => {
    return adapter.updateOne(
      { id: action.task.id, changes: action.task },
      {
        ...state,
        activeTaskId: null
      }
    );
  }),
  on(TasksApiActions.taskDeleted, (state, action) => {
    return adapter.removeOne(action.taskId, state);
  })
);
on(TasksApiActions.taskCompleted, (state, action) => {
  // TODO: Add Implementation
});

export function reducer(state: State | undefined, action: Action) {
  return tasksReducer(state, action);
}

export const { selectAll, selectEntities } = adapter.getSelectors();
// export const selectTaskIds = selectIds;
export const selectTaskEntities = selectEntities;
export const selectAllTasks = selectAll;
// export const selectTaskCount = selectTotal;
export const selectActiveTaskId = (state: State) => state.activeTaskId;
export const selectActiveTask = createSelector(
  selectEntities,
  selectActiveTaskId,
  (tasksEntities, activeTaskId) => {
    return activeTaskId ? tasksEntities[activeTaskId] : null;
  }
);

