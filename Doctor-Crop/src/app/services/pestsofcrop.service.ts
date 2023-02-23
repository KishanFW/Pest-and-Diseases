import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pest } from '../englishpages/detect/crop-cropvar/crops/pests-diseases/pests-diseases.model';
import { Prevention } from '../englishpages/prevent/prevent.model';

@Injectable({
  providedIn: 'root'
})
export class PestsofcropService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getPests(crop: string): Observable<Pest[]>{
    return this.http.get<Pest[]>(this.apiUrl+'/pestsofcrop/'+crop);
  }

  getpreventionsofpest(pest: string): Observable<Prevention[]>{
    return this.http.get<Prevention[]>(this.apiUrl+'/preventionsofpest/'+pest);
  }
}
