import { Routes } from '@angular/router';

import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';
import { Todo } from './todo/todo';
import { Dashboard } from './dashboard/dashboard'


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'profile', component: Profile },
  { path: 'todo', component: Todo },
  { path: 'dashboard', component: Dashboard }
];
