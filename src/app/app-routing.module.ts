import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './views/forgotpassword/forgotpassword.component';
import { LoginComponent } from './views/login/login.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RegisterComponent } from './views/register/register.component';
import { TaskComponent } from './views/task/task.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/products',
    pathMatch:'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'task',
    component:TaskComponent
  },
  {
    path: "forgotpassword",
    component:ForgotpasswordComponent
  },
  {
    path: "profile",
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
