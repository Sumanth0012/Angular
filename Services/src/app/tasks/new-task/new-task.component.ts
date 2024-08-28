import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  constructor(private tasksService: TasksService){}

  onAddTask(title: string, description: string) {
    const task:Task = {
      id: new Date().getMilliseconds().toString(),
      title: title,
      description: description,
      status: "OPEN",
    }
    
    this.tasksService.addTask(task);
    this.formEl()?.nativeElement.reset();
  }
}
