import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Task } from 'src/app/shared/models';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
  originalTask: Task | undefined;
  @Output() save = new EventEmitter();
  @Input() taskDone = new EventEmitter();
  @Output() cancel = new EventEmitter();

  taskForm = new FormGroup({
    label: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    // done: new FormControl(''),
  });

  @Input() set task(task: Task) {
    this.taskForm.reset();
    this.originalTask = undefined;

    if (task) {
      this.taskForm.setValue({
        label: task.label,
        description: task.description,
        category: task.category
      });

      this.originalTask = task;
    }
  }

  onSubmit(task: Task) {
    this.save.emit({ ...this.originalTask, ...task });
  }

  // TODO
  // onComplete(task: Task) {
  //   if (task.done === 'false') {
  //     this.taskDone.emit({...this.originalTask, ...task });
  //   }
  // }

}
