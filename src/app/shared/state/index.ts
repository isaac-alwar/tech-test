import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromTasks from './tasks.reducer';

export interface State {
  tasks: fromTasks.State;
}

export const reducers: ActionReducerMap<State> = {
  tasks: fromTasks.reducer
};


/** Tasks Selectors */
export const selectTasksState = (state: State) => state.tasks;
export const selectAllTasks = createSelector(
  selectTasksState,
  fromTasks.selectAllTasks
);
export const selectActiveTask = createSelector(
  selectTasksState,
  fromTasks.selectActiveTask
);
export const selectTasksCount = createSelector(
  selectTasksState,
  fromTasks.selectAll
);
