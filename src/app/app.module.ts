import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { AuthserviceService } from './authservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ContactComponent,
    AboutComponent,
    NotfoundComponent,
    UpdateComponent,
    LoginComponent
  ],
  imports: [

    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent,canActivate:[AuthserviceService]},
      {path:'home',component:HomeComponent,canActivate:[AuthserviceService]},
      {path:'about',component:AboutComponent},
      {path:'contact',component:ContactComponent},
      {path:'register',component:RegisterComponent,canActivate:[AuthserviceService]},
      {path:'update/:No',component:UpdateComponent,canActivate:[AuthserviceService]},
      {path:'login',component:LoginComponent},
      {path:'**',component:NotfoundComponent}
    ])
  ],
  providers: [HttpClientModule, DataService,AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
