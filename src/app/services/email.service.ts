import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../interfaces/email';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://127.0.0.1:8000/api/sendEmail';

  constructor(private http: HttpClient) { }

  sendEmail(formData: Email) {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
