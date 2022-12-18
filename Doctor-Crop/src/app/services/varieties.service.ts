import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Variety } from "../englishpages/detect/crop-cropvar/crops-varieties/variety.model";

@Injectable({
  providedIn: 'root'
})
export class VarietiesService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getvarietiesofcrop(crop: string): Observable<Variety[]>{
    return this.http.get<Variety[]>(this.apiUrl+'/varietiesofcrop/'+crop);
  }
}
