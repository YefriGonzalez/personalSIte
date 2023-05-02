import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
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
  @Input() darkTheme!: boolean;
  @ViewChild('formContacto') miFormulario!: NgForm;
  constructor(private formBuilder: FormBuilder, private emailService: EmailService) {
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
      this.emailService.sendEmail(this.formContact.value).subscribe((resp) => {
        if (resp.status == true) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Correo electrónico enviado',
            showConfirmButton: false,
            timer: 1500
          });
          this.formContact.reset();
          this.formContact.controls['name'].setErrors(null);
          this.formContact.controls['email'].setErrors(null);
          this.formContact.controls['asunto'].setErrors(null);
          this.formContact.controls['message'].setErrors(null);
        }
      });
    }
  }
}
