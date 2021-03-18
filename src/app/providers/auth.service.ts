import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { response } from './response';
const uri = environment.uri
@Injectable()
export class AuthService{
    constructor(private _http:HttpClient){}

    register(obj:any){
       return this._http.post(uri+'/users/register',obj)
    }
    login(obj:any){
        return this._http.post<response>(uri+'/users/login',obj)
    }
    verifyEmail(obj:any){
      return this._http.post<response>(uri+'/users/verify',obj)
    }
    changePassword(obj:any){
      return this._http.post<response>(uri+'/users/changePassword',obj)
    }
    resetPassword(obj:any){
      return this._http.post<response>(uri+'/users/resetPassword',obj)
    }
    logOut(){
      return this._http.post<response>(uri+'/users/logOut',{});
    }
    logOutAll(){
      return this._http.post<response>(uri+'/users/logOutAll',{});
    }


     
}