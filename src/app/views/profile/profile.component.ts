import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  password: any = {
    oldPassword: '',
    newPassword: ''
  };
  profile: any = {
    name: '',
    email: '',
    phone:''
  }

  constructor(private _authservice: AuthService,private _router:Router) { 
    this.getProfileDetails()}

  ngOnInit(): void {
  }

  resetPassword() {
    this._authservice.resetPassword(this.password).subscribe(
      (res) => {
        console.log(res)
      },
      (error) => {
        console.log(error, 'restPassword()');
      }
    )
  }

  logOut() {
    this._authservice.logOut().subscribe(
      (res) => {
        console.log(res);
        sessionStorage.clear();
        this._router.navigate(['/login'])

      },
      (error) => {
        console.log(error, 'logOut()');

      }
    );

  }

  logOutAll() {
    this._authservice.logOutAll().subscribe(
      (res) => {
        console.log(res);
        sessionStorage.clear();
        this._router.navigate(['/login'])

      }, (error) => {
        console.log(error, 'logOut()');
      }
    )
  }

  getProfileDetails(){
    this._authservice.getProfileDetails().subscribe(
      (response)=>{
        const result=response;
        // console.log(result)
        if(result.code){
          this.profile={...result.data}
          // console.log(this.profile,"this is my profile")
        }

      },
      (error)=>{}
    )
  }

  


}
