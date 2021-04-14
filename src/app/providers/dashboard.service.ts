import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { response } from './response';

const uri = environment.uri
@Injectable()
export class DashboardService{
    constructor(private _http:HttpClient){}
    getUsers(){
        return this._http.get<response>(uri+'/users');

    }
    deleteUser(id:any){
        return this._http.delete<response>(uri+'/users/'+id)
    }
    updateUser(user:any){
        return this._http.put<response>(uri+'/users/',user)

    }



}