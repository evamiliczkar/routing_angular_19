import { Routes } from '@angular/router';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';

export const routes: Routes = [
    {
        path: '', //<your-domain>/tasks
        loadComponent: () => import('./tasks/no-task/no-task.component').then(m => m.NoTaskComponent) //<your-domain>/ will load NoTaskComponent
        //component that should become active for this route
    },
    {
        path: 'users/:userId', //<your-domain>/tasks
        loadComponent:  () => import('./users/user-tasks/user-tasks.component').then(m => m.UserTasksComponent) //<your-domain>/ will load UserTasksComponent
        //component that should become active for this route
    },

]