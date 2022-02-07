import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @ViewChild('f')
  signupForm!: NgForm;

  user = {
    username: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    checkbox: '',
  };
  submitted = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;

    this.user.username = this.signupForm.value.username;
    this.user.lastName = this.signupForm.value.lastName;
    this.user.email = this.signupForm.value.email;
    this.user.phone = this.signupForm.value.phone;
    this.user.address = this.signupForm.value.address;
    this.user.checkbox = this.signupForm.value.checkbox;
  }
}
