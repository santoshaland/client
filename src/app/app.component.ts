import { Component } from '@angular/core';
import { AuthserviceService } from './authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
 constructor(public service:AuthserviceService){

 }
 Logout()
 {console.log("ak")
   this.service.LogOut();
 }


}

