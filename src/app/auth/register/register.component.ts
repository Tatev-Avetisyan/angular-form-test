import { Component, OnInit } from '@angular/core';
import {LoginForm} from "../../types/Auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../registration-form/registration-form.component.css']
})
export class RegisterComponent implements OnInit {
  form:LoginForm = {
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmPassword:""
  }

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.form)
  }

}
