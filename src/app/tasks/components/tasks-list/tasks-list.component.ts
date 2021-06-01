import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  @Input() tasks: Task[];
  @Input() readonly = false;
  @Output() onselect = new EventEmitter();
  @Output() delete = new EventEmitter();



}
