import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { pinCode } from 'src/app/interface/pincode-i';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-get-form',
  templateUrl: './get-form.component.html',
  styleUrls: ['./get-form.component.css'],
})
export class GetFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  ipinSuccess = false;
  ipinError = false;
  iemail: string = '';
  ipasscode: string = 'password';
  ipinNo: any;
  ipinStatus: any;
  // ipinErrorr: any;
  public showPassword: boolean = false;
  ipcscolor: string = 'white';
  iform: boolean = true;
  iDform: boolean = false;
  iFDi: any;
  igbData: any;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [Validators.required]),
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(4)]],
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9 ]{10}'),
      ]),
      pinCode: new FormControl('', [
        Validators.required,
        this.icheckPin.bind(this),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.iFDi = {
      fName: this.registerForm.controls['firstName'].value,
      lName: this.registerForm.controls['lastName'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
      phone: this.registerForm.controls['phone'].value,
      pincode: this.registerForm.controls['pinCode'].value,
    };

    localStorage.setItem('iForm', JSON.stringify(this.iFDi));

    alert('Success');
    console.log(this.registerForm.value);
  }

  onReset() {
    this.ipcscolor = 'white';
    this.submitted = false;
    this.registerForm.reset();
  }

  ipc: any;
  ipinFun(data: any) {
    this.userService.getpinCode(data).subscribe((data: pinCode[]) => {
      console.log(data);
      this.ipc = data[0];
      this.ipinStatus = this.ipc.Status;
      console.log(this.ipinStatus);

      if (this.ipinStatus == 'Error') {
        console.log('E');
        this.ipcscolor = 'white';
      } else if (this.ipinStatus == 'Success') {
        console.log('S');
        this.registerForm.controls['pinCode'].setErrors(null);
        this.ipcscolor = 'green';
      }
    });
  }

  icheckPin(control: FormControl) {
    if (this.ipinStatus == 'Error') {
      return { ipinError: true };
    }
    return null;
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  i = 1;
  // iShow() {
  //   this.iform = false;
  //   this.iDform = true;
  // }
}
