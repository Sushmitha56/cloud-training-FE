import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  password: any = {
    oldPassword:'',
    newPassword:''
  };

  constructor(private _authservice:AuthService) { }

  ngOnInit(): void {
  }

  resetPassword(){
    this._authservice.resetPassword(this.password).subscribe(
      (res)=>{
        console.log(res)
      },
      (error)=>{
        console.log(error,'restPassword()');        
      }
    )
  }




logOut(){
  this._authservice.logOut().subscribe(
    (res)=>{
      console.log(res);
      sessionStorage.clear();
      
    },
    (error)=>{
      console.log(error,'logOut()');
      
    }
  );

}

logOutAll(){
  this._authservice.logOutAll().subscribe(
    (res)=>{
      console.log(res);
      sessionStorage.clear();

    },(error)=>{
      console.log(error,'logOut()');
    }
  )
}


}
