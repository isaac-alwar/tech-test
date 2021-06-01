import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { TasksService } from '../shared/services/tasks.service';
import { TasksApiEffects } from './tasks-api-effects';

describe('TasksApiEffects', () => {
  let service: TasksApiEffects;

  beforeEach(() => {
    const actionsStub = () => ({});
    const tasksServiceStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        TasksApiEffects,
        { provide: Actions, useFactory: actionsStub },
        { provide: TasksService, useFactory: tasksServiceStub }
      ]
    });
    service = TestBed.get(TasksApiEffects);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
