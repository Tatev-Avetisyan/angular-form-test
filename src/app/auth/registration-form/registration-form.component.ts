import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm:any

  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      "firstname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "phoneNumber": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "password": new FormControl(null,[Validators.required]),
    })
  }
  submitData(){
    console.log(this.registrationForm.value)
    if (this.registrationForm.value){
      alert(`Thank You ${this.registrationForm.value.firstname}, your registration is done!`)
      this.registrationForm.reset()
    }
  }
  get firstname(){return this.registrationForm.get('firstname')}
  get lastname(){return this.registrationForm.get('lastname')}
  get email(){return this.registrationForm.get('email')}
  get phoneNumber(){return this.registrationForm.get('phoneNumber')}
  get password(){return this.registrationForm.get('password')}

}
