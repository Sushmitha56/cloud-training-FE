import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../app/providers/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _authService:AuthService,private router:Router) {

   }

  ngOnInit(): void {
  }

  register(form:NgForm){
    let obj ={
      name: form.value.name,
      phone: form.value.phone,      
      email: form.value.email,
      password:form.value.password,
      
    }
    this._authService.register(obj).subscribe(
      (res)=>{
        console.log(res);
        this.verifyit(res);
      },
      (error)=>{
        console.log(error);
        
      }
    )
    
    
  }
  verifyit(res:any){
    console.log("this is mine:",res.message);
    if(res.status==="success"){
      this.router.navigate(['/login']);

    }
    
  }

}
