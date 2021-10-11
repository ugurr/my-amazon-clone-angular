import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutService } from 'src/app/SERVICE/aut.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;

  constructor(private fb: FormBuilder, private aut: AutService) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.LoginForm = this.fb.group({
      email: [''],
      password: ['']

    })
  }

  signIn() {
    this.aut.signIn(this.LoginForm.value.email, this.LoginForm.value.password)
   }
  
  createAccount() {
    this.aut.signUp(this.LoginForm.value.email, this.LoginForm.value.password)
  }
}
