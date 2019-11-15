import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 emp;
 message;
constructor( public routes:ActivatedRoute,
             public services:DataService, 
             public router:Router)
             {}
ngOnInit()
{
   let Status=this.routes.paramMap;
     Status.subscribe((params)=>{
       let No=params.get("No");
       let EmpSearched=this.services.GetDataByID(No);
           EmpSearched.subscribe((result:any)=>{
         if(result.length>0)
         {
           this.emp=result[0];
           console.log(this.emp);
           this.message="data found";
         }
         else
         {
           this.message="something went wrong";
         }
       });
     });
} 
Update()
{
  let statusOfUpdate =this.services.Update(this.emp);
  statusOfUpdate.subscribe((result:any)=>{
      if(result.affectedRows>0)
      {
        this.emp=result[0];
        this.message="updated";
        this.router.navigate(['home']);
      } 
      else
      {
        this.message="something went wrong";
      }  
   });
}
}