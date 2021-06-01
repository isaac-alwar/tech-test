import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Task, TaskProps } from '../models/task.model';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;
  const TASKURL = 'http://localhost:3000/tasks';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TasksService]
    });
    service = TestBed.get(TasksService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('add', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      const taskPropsStub: Task = <Task> {};
      service.add(taskPropsStub).subscribe(res => {
        expect(res).toEqual(taskPropsStub);
      });
      const req = httpTestingController.expectOne(`${TASKURL}`);
      expect(req.request.method).toEqual('POST');
      req.flush(taskPropsStub);
      httpTestingController.verify();
    });
  });

  describe('getAll', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      service.getAll().subscribe(res => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne(`${TASKURL}`);
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });

  describe('getTasks', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      service.getTasks().subscribe(res => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne(`${TASKURL}`);
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });
});
