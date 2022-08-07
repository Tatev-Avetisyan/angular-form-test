import { Component, OnInit } from '@angular/core';
import {LoginForm} from "../../types/Auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../registration-form/registration-form.component.css']
})
export class LoginComponent implements OnInit {
  form:LoginForm = {
    email:'',
    password:''
  }

  constructor() { }

  ngOnInit(): void {
  }
  submit=()=>{
    alert(this.form)
  }

}
