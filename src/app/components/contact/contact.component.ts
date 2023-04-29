import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formContact!:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.buildForm();
  }
  private buildForm(){
    this.formContact=this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required,Validators.email],
      asunto:['',Validators.required],
      message:['',Validators.required]
    })
  }
  sendEmail(){
    
  }
}
