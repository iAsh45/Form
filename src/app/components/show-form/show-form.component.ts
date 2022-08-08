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
  ilsdata: any;
  constructor(private userService: UserService, private _location: Location) {}

  ngOnInit(): void {
    this.ilsdata = localStorage.getItem('iForm');
    this.ifdata = JSON.parse(this.ilsdata);
  }

  backClicked() {
    this._location.back();
  }
}
