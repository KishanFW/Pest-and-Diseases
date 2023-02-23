import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Symptom } from '../englishpages/detect/crop-cropvar/crops/pests-diseases/pests-diseases.model';

@Injectable({
  providedIn: 'root'
})
export class SymptomsService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getsymptomsofcrop(crop: string,catagory: string[]): Observable<Symptom[]>{
    return this.http.get<Symptom[]>(this.apiUrl+'/symptomsofcrop/'+crop+'/'+catagory);
  }

  getsymptomsofvariety(variety: string,catagory: string[]): Observable<Symptom[]>{
    return this.http.get<Symptom[]>(this.apiUrl+'/symptomsofvariety/'+variety+'/'+catagory);
  }
}
