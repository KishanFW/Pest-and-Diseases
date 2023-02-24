import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsymptomService {
  apiUrl = 'http://localhost:8000/api';
  url: string;

  constructor(private http:HttpClient) { }

  newsymptoms(district: string,crop: string,variety: string,pestordisease: string,symptoms: string){
    const data = {
      district: district,
      crop: crop,
      variety: variety,
      pestordisease: pestordisease,
      symptoms: symptoms
    }

    this.url = this.apiUrl+'/newsymptoms';
    console.log(this.url);
    return this.http.post(this.url,data);
  }
}
