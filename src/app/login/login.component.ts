import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message;

  constructor(public auth:AuthserviceService, public router:Router) { }

  ngOnInit() {
  }

  Login(emp)
  {
    console.log(emp.name,emp.password);
         let isloggedin=this.auth.LogIn(emp);
         if(isloggedin)
         {
           this.message="";
           this.router.navigate(['home']);
         }
         else
         {
           this.message="Invalid Name or Password";
         }
  }

  Logout()
 {
      
 }
}
