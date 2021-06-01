import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TasksService } from './shared/services/tasks.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {}

  title = 'tech-test - I.Alwar';
}
