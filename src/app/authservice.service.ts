import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(public router:Router) { }

  isLoggedin()
  {
     return (sessionStorage.getItem("isloggedin" )== "1");
  }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  {
    if(this.isLoggedin())
    {
      return true;
    }
    else
    {
      this.router.navigate(['login']);
      return false;
    }
  }
  LogIn(emp)
  {
     if(emp.name=="santosh" && emp.password=="santosh123")
     {
       sessionStorage.setItem("isloggedin","1");
       return true;
     }
     else
     {
       return false;
     }
  }

 LogOut()
 {
   sessionStorage.setItem("isloggedin","0");
  this.router.navigate(['login']);
 }

}
