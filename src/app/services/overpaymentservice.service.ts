import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Overpayment } from '../models/Overpayment';


//????? Need to learn about this syntax
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}


@Injectable({
  providedIn: 'root'
})
export class OverpaymentserviceService {
  //overpaymentUrl:string = 'http://overpaymentwebapi.local/api/values';
  //todosLimit:string = '?_limit=5';
  overpaymentUrl:string = 'http://localhost:44312/api/values';
  constructor(private http:HttpClient) { }


  //Our data is retrieved through this service
  getAllOverpayments(): Observable<Overpayment[]> {
    return this.http.get<Overpayment[]>(`${this.overpaymentUrl}`); //get data from the url
    /*return this.http.get<Overpayment[]>(`${this.overpaymentUrl}`, httpOptions); //get data from the url*/
  }

  //Retrieve records pertaining to a single member
  getMemberOverpayments(memberId:number): Observable<Overpayment[]> {
    return this.http.get<Overpayment[]>(`${this.overpaymentUrl}/${memberId}`);
  }

  //Delete record with a specific claim number...probably not unique so change later
  deleteOverpayment(claimNumber:string): Observable<boolean> {
    const url = `${this.overpaymentUrl}/${claimNumber}`;
    return this.http.delete<boolean>(url);
  }
}