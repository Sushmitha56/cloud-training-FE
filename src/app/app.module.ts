import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProfileComponent } from './views/profile/profile.component';
import { OrdersComponent } from './views/orders/orders.component';
import { AuthService } from './providers/auth.service';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DashboardService } from './providers/dashboard.service';
import { TokenService } from './providers/token-interceptor.service';
import { TaskComponent } from './views/task/task.component';
import { ForgotpasswordComponent } from './views/forgotpassword/forgotpassword.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    ProfileComponent,
    OrdersComponent,
    DashboardComponent,
    TaskComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, 
    DashboardService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenService,
      multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
