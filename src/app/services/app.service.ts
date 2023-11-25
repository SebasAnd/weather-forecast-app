import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  imports : [],  
  providers: []
  })
export class AppService {

  constructor(private http: HttpClient) { }
   
  WeatherInformation(url : string)
  {
    return this.http.get(url);
  }

  
}
