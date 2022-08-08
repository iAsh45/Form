import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pinCode } from './interface/pincode-i';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public iformData = new Subject<string>();
  public ibackData = new Subject<string>();

  constructor(private http: HttpClient) {}

  isAdminAllow(): boolean {
    return false;
  }

  getpinCode(pin: any): Observable<pinCode[]> {
    return this.http.get<pinCode[]>(
      `https://api.postalpincode.in/pincode/${pin}`
    );
  }
}
