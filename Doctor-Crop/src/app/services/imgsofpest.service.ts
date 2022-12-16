import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PestImg } from '../englishpages/detect/crop-cropvar/crops/pests-diseases/pests-diseases.model';

@Injectable({
  providedIn: 'root'
})
export class ImgsofpestService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getpestimgs(): Observable<PestImg[]>{
    return this.http.get<PestImg[]>(this.apiUrl+'/pestimgs');
  }
}
