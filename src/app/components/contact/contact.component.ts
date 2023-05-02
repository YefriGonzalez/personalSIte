import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
//import * as nodemailer from 'nodemailer';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formContact!: FormGroup;
  userEmail: string = "yefrig00@gmail.com";
  @Input() darkTheme!:boolean;
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  private buildForm() {
    this.formContact = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      message: ['', Validators.required]
    })
  }
  get Name() {
    return this.formContact.get('name');
  }
  get Email() {
    return this.formContact.get('email');
  }
  get Asunto() {
    return this.formContact.get('asunto');
  }
  get Message() {
    return this.formContact.get('message');
  }

  async sendEmail() {
    if (this.formContact.valid) {
     
      /*const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: this.userEmail,
          pass: 'ydsjpnidtaiflugz'
        }
      });
      let info = await transporter.sendMail({
        from: this.Email?.value, // sender address
        to: this.userEmail, // list of receivers
        subject: this.Asunto?.value, // Subject line
        text: this.Message?.value, // plain text body
      });

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Correo electrónico enviado',
        showConfirmButton: false,
        timer: 1500
      })
    */

    }

  }
}
