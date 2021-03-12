import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { TaskService } from 'src/app/providers/task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks:any = [];
  task: any = {
    name: '',
    description:'',
  };
  isEdit:boolean=false;
  isTable:boolean=true;
  isAdd: boolean = false;
  editTask: any = { 
    _id: '', 
    name: '', 
    description: '',
  };
  constructor(private _taskService: TaskService) { }
  
  ngOnInit(): void {
    this.getTasks();
  }

  
  addTask() {
    // this.toggle();
    this._taskService.addTask(this.task).subscribe(
      (res) => {
        const result = res
        if (result.code) {
          // console.log(result);
          this.getTasks();
          this.isTable = !this.isTable;
          this.isAdd = !this.isAdd;
          
        } else {
          this.isTable = !this.isTable;
          this.isAdd = !this.isAdd;
        }
      },
      (error) => {
        console.log(error, 'addTask()');
      }
    );
  }

  getTasks() {
    this._taskService.getTasks().subscribe(
      (response) => {
        const result = response;
        console.log(result);
        if (result.code) {
          this.tasks = result.data;
          console.log(this.tasks)
        } else{
          this.tasks = result.data;
        }
      },
      (error) => {
        console.log('getTask()', error);
      })
  }
  deleteTask(id:any){
    this._taskService.deleteTask(id).subscribe(
      (response)=>{
        const result = response;
        this.getTasks()
      },
      (error)=>{
        console.log(error);
        
      }
    );  
  }

  showEditForm(task:any){
    this.isEdit = !this.isEdit;
    this.isTable= !this.isTable;
    this.editTask = {
      _id: task._id,
      name: task.name,
      description:task.description,
    };
  }

  updateTask(){
    this._taskService.updateTask(this.editTask).subscribe(
      (res)=>{
        const result= res;
        if( result.code){
          this.getTasks();
          this.isTable = !this.isTable;
          this.isEdit = !this.isEdit;
        }
      },
      (error)=>{
        console.log(error, 'updateTask()');
      }
        )
      }
  
}
