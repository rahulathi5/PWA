import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { 

  	
  }
  getTechnology(index){
  		return this.http.get('http://www.json-generator.com/api/json/get/bTyelivCDC?indent=2')
  	}
}
