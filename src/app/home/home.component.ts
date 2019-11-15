import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees ;
  message ;
  constructor(public router: Router,public service:DataService)
   {
    this.gotData();
    }
    gotData(){
      let StateOfResult= this.service.GetData();

         StateOfResult.subscribe((result)=>{
           this.employees=result;
         });
    }

  ngOnInit() {
         let StateOfResult= this.service.GetData();

         StateOfResult.subscribe((result)=>{
           this.employees=result;
         });
    // this.employees=[
    //   {no:1,name:"santosh",address:"solapur"},
    //   {no:2,name:"vishal",address:"solapur"},
    //   {no:3,name:"teja",address:"solapur"}
    // ];
  }
      
  
  GoToReigster()
  {
    this.router.navigate(['register']);
  }
  
  Delete(empNo)
  {
    let statusOfDelete=this.service.DeleteData(empNo);
    statusOfDelete.subscribe((result:any)=>{
      console.log(result);
       this.gotData();
    });

  }


}
