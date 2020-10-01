import { Component, OnInit } from '@angular/core';

import { Register } from '../registerUser';
import { RegisterUserService } from '../register-user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registers: Register[] = [];  // this is interface
  form: FormGroup;

  constructor(private registerUserService: RegisterUserService,
    private formBuilder: FormBuilder   // for FormBuilder we make a constructor
  ){}

  ngOnInit(): void {
  
    this.form = this.formBuilder.group({
      name:'',
      email:'',
      password:'',
   });

  }

  add(): void {
    let name = this.form.value.name.trim();   
    let email = this.form.value.email.trim(); 
    let password = this.form.value.email.trim();  
    if (!name) { return; }
    if (!email) { return; }
    if (!password) { return; }
    const newTask:Register= {name, email, password } as Register
    this.registerUserService.addHero(newTask)
      .subscribe(registers => {
        this.registers.push(registers);
      });
  }

}
