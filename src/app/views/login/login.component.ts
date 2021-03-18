import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // result:any;
  user:any={
    email:"",
    password:""
  }

  constructor(private _authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  

  onLogin(){
    
    // console.log(this.user);
    this._authService.login(this.user).subscribe(
      (res)=>{
        const result:any = res
        if(result.code){
          sessionStorage.setItem("authToken",result.data)
          this.router.navigate(["dashboard"]);
        }
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  

}
