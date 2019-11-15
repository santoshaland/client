import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }
  
  GetData()
  {
    return this.http.get("http://localhost:5000/employees");     
  }

  AddData(emp:any)
  {
    return this.http.post("http://localhost:5000/employees",emp);   
  }

  DeleteData(No)
  {
    return this.http.delete("http://localhost:5000/employees/" +No);  
  }

  GetDataByID(No)
  {
   return this.http.get("http://localhost:5000/employees/" +No );
  }

  Update(emp){
    return this.http.put("http://localhost:5000/employees/" +emp.no,emp );
  }
}
