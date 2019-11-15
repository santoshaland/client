import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message;

  constructor(public router:Router, public service:DataService) { }

  ngOnInit() {
    
  }
 AddEmp(dataFromUI:any)
 
 {
   let emp=dataFromUI.form.value;
   console.log(emp);
   let StateOfResult= this.service.AddData(emp);
   
   StateOfResult.subscribe((result:any)=>{
   if(result.affectedRows>0)
   {
     this.router.navigate(['home']);
   }
   else
   {
     this.message="Add valid data";
     console.log("this");
   }
   });

 }
}
