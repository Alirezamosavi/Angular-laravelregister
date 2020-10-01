import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registers: Register[] = [];
  form: FormGroup;
  constructor(private registerService: RegisterService,
    private formBuilder: FormBuilder   // for FormBuilder we make a constructor
    ){}

    ngOnInit() {
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
    this.registerService.addHero(newTask)
      .subscribe(registers => {
        this.registers.push(registers);
      });
  }

}
