import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css'],
})
export class ShowFormComponent implements OnInit {
  ifdata: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.receivemessageF().subscribe((data) => {
      console.log('Show Form');
      this.ifdata = data;
      console.log(this.ifdata.fName);
    });
  }
}
