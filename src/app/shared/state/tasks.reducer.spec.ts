import * as fromReducer from './tasks.reducer';
import { Task } from '../models';
import { tasksLoaded } from 'src/app/tasks/actions/tasks-api.actions';

describe('TasksReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.tasksReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('loadTasks action', () => {
    it('should load tasks and update the state ', () => {
      const { initialState } = fromReducer;
      const newState: Task[] = [
        {
          id: 9,
          label: 'Chore #19',
          description: 'Another task',
          category: 'Office',
          done: 'false'
          }
      ];

      const action = tasksLoaded({ tasks: newState });
      const state = fromReducer.tasksReducer(initialState, action);

      // expect(state).toEqual(newState);
      // expect(state).not.toBe(newState);
    });
  });
});
