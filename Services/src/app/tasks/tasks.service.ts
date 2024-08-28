import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

@Injectable({
    providedIn:'root',
})   //we can also use this in providers main.ts, we can also write in @component providers
export class TasksService {
    private tasks = signal<Task[]>([])

    alltasks = this.tasks.asReadonly();

    getallTasks() {
        return this.tasks;
    }

    addTask(taskdata:Task) {
        this.tasks.update((oldtasks)=>[...oldtasks,taskdata]);
    }

    updateTaskStatus(taskId: string, newStatus: TaskStatus) {
        this.tasks.update((oldtasks) =>
            oldtasks.map((task) => 
                task.id === taskId ? { ...task, status: newStatus} : task
            )
        );
    }

    // changestatus(taskid:string, status: TaskStatus) {
    //     const taskarray = this.tasks.filter((task)=>task.id===taskid);
    //     taskarray[0].status = status;
    //     this.tasks = taskarray;
    // }
}