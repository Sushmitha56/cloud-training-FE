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
          console.log(this.userData);
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
}
