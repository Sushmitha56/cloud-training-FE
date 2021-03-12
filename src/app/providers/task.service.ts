import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { response } from './response';
const uri = environment.uri
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http:HttpClient) { }

  addTask(input:any){
    return this._http.post<response>(uri+'/tasks',input)
  }

  getTasks(){
    return this._http.get<response>(uri+'/tasks');
  }

  deleteTask(id:any){
    return this._http.delete<response>(uri+'/tasks/'+id)
  }

  updateTask(obj:any){
    return this._http.put<response>(uri + '/tasks/' ,obj);
  }
}
