import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css'],
})
export class ShowFormComponent implements OnInit {
  ifdata: any;
  constructor(private userService: UserService, private _location: Location) {}

  ngOnInit(): void {
    this.userService.receivemessageF().subscribe((data) => {
      console.log('Show Form');
      this.ifdata = data;
      console.log(this.ifdata.fName);
    });
  }

  backClicked() {
    this._location.back();
    const backdata = {
      mForm: 'true',
      sForm: 'false',
    };
    this.userService.sendmessageGB(backdata);
  }
}
