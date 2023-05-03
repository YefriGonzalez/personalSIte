import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../interfaces/email';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'https://web-site-backend.onrender.com/api/sendEmail';

  constructor(private http: HttpClient) { }

  sendEmail(formData: Email) {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
