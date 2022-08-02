import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formData } from 'src/app/formcd';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  iemail: string = '';
  ipasscode: string = 'password';
  public showPassword: boolean = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
    //Value change
    this.registerForm.get('firstName')?.valueChanges.subscribe((data: any) => {
      console.log(data + 'normal');
    });

    this.registerForm.valueChanges.subscribe((data: formData) => {
      console.log('Fn changed:' + data.firstName);
      console.log('Ln changed:' + data.lastName);
      console.log('Email changed:' + data.email);
      console.log('Passcode changed:' + data.password);
    });

    // Status Change
    this.registerForm.get('firstName')?.statusChanges.subscribe((data: any) => {
      console.log(data + 'status normal');
    });

    this.registerForm.statusChanges.subscribe((data: any) => {
      console.log('status changed:' + data);
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    alert('Success');
    console.log(this.registerForm);
    this.registerForm.reset();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  // ishp = 1;
  // SHpassword() {
  //   this.ishp++;
  //   if (this.ishp % 2 == 0) {
  //     this.ipasscode = 'text';
  //   } else if (this.ishp % 2 == 1) {
  //     this.ipasscode = 'password';
  //   }
  // }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
