import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  user:any = {
    email:'',
    password:''
  }
  constructor(private _authService:AuthService) { }
  isVerified:boolean = false
  ngOnInit(): void {
  }
  onSubmit(){
    this._authService.verifyEmail(this.user).subscribe(
      (res)=>{
        const result = res;
        if(result.code){
          this.isVerified = true;
        }
        else{
          this.isVerified = false;

        }
      },
      (error)=>{
        console.log('onSubmit()',error);
      }
    )
  }
  changePassword(){
  this._authService.changePassword(this.user).subscribe(
    (res)=>{
      const result = res;
      if(result.code){
        console.log('Password changed');
      }
      else{
     
      }
    },
    (error)=>{
      console.log('changePassword()',error);
    }
  )
  }

}
