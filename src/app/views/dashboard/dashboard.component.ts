import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/providers/dashboard.service';
// import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userData :any = []
  isEdit:boolean=false;
  isTable:boolean=true;
  editUser:any={
    _id:'',
    name:'',
    email:'',
    phone:''
  }

  constructor(private _dashboardservice:DashboardService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this._dashboardservice.getUsers().subscribe(
      (response)=>{
        const result = response;
        if(result.code){
          this.userData = result.data
          // console.log(this.userData);
        }
      },
      (error)=>{
        console.log('getUsers()',error);
        
      }
    )

  }

  delete(id:any){
    this._dashboardservice.deleteUser(id).subscribe(
      (response)=>{
        const result = response;
        if(result.code){
          this.getUsers()
        }else{
          console.log(result.message);
          
        }
      },
      (error)=>{}
    )
  }

  showEditForm(user:any){
    this.isEdit=!this.isEdit,
    this.isTable=!this.isTable,
    this.editUser={
      _id:user._id,
      name:user.name,
      email:user.email,
      phone:user.phone


    }

  }

  updateUser(){
    this._dashboardservice.updateUser(this.editUser).subscribe(
      (res)=>{
        const result=res;
        console.log(result);
        if(result.code){
          this.getUsers()
          this.isEdit=!this.isEdit
          this.isTable=!this.isTable
        }

      },
      (error)=>{
        console.log(error,'updateUser()');
        
        
      }
    )

  }
}
