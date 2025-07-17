import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  name: string;
  date: string;
  createdAt: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'todo' | 'inprogress' | 'completed';
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
  newTask = '';
  taskDate = '';
  taskPriority: 'High' | 'Medium' | 'Low' = 'Medium';
  tasks: Task[] = [];

  addTask() {
    if (this.newTask.trim() && this.taskDate) {
      const now = new Date();
      this.tasks.push({
        name: this.newTask.trim(),
        date: this.taskDate,
        createdAt: now.toISOString(), // unique timestamp
        priority: this.taskPriority,
        status: 'todo'
      });
      this.newTask = '';
      this.taskDate = '';
      this.taskPriority = 'Medium';
    }
  }

  changeStatus(task: Task, status: 'todo' | 'inprogress' | 'completed') {
    task.status = status;
  }

  deleteTask(taskToDelete: Task) {
    const index = this.tasks.findIndex(
      t =>
        t.name === taskToDelete.name &&
        t.date === taskToDelete.date &&
        t.createdAt === taskToDelete.createdAt
    );
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  // 🎯 Group tasks by date & sort by priority within each date
  get groupedTasksByDate(): { date: string; tasks: Task[] }[] {
    const map = new Map<string, Task[]>();

    for (const task of this.tasks) {
      if (!map.has(task.date)) {
        map.set(task.date, []);
      }
      map.get(task.date)!.push(task);
    }

    const priorityOrder = { High: 1, Medium: 2, Low: 3 };

    const result = Array.from(map.entries()).map(([date, tasks]) => {
      return {
        date,
        tasks: tasks.sort(
          (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
        )
      };
    });

    // Sort dates ascending
    result.sort((a, b) => a.date.localeCompare(b.date));

    return result;
  }
}
