import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TaskProps } from '../models/task.model';
import { map } from 'rxjs/operators';
import { nanoid } from 'nanoid';

const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const TASKURL = 'http://localhost:3000/tasks';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(TASKURL).pipe(map(tasks => tasks ));
  }

  /* Transformed Task List*/
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(TASKURL)
        .pipe(
          map(tasks => tasks.map(task => ({
            ...task,
            searchkey: [task.label, task.category, task.done, task.description, task.id]
            }) as Task)));
            //  tap(data => console.log('Transformed Tasks: ', JSON.stringify(data))));
  }

  loadOne(id: number) {
    return this.http.get<Task>(`${TASKURL}/${id}`);
  }

  add(taskProps: TaskProps) {
    const Task = {
      id: nanoid(6),
      done: false,
      ...taskProps
    };

    return this.http.post<Task>(
      `${TASKURL}`,
      JSON.stringify(Task),
      HEADER);
    }

  update(id: number, updates: TaskProps) {
    return this.http.put<Task>(
      `${TASKURL}/${id}`,
      JSON.stringify(updates),
       HEADER);
  }

  delete(id: number) {
    return this.http.delete<Task>(`${TASKURL}/${id}`);
  }

  taskComplete(id: number, updates: TaskProps) {
    return this.http.put<Task>(
      `${TASKURL}/${id}`,
      JSON.stringify(updates),
       HEADER);
  }
}
