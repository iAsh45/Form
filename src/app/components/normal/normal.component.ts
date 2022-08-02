import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css'],
})
export class NormalComponent implements OnInit {
  idata = [
    { id: 1, name: 'Ashish', age: 22 },
    { id: 2, name: 'Ash', age: 23 },
    { id: 3, name: 'kartos', age: 32 },
    { id: 4, name: 'Sam', age: 33 },
  ];

  obj = {
    data: 'Ashish',
  };

  constructor() {}

  ngOnInit(): void {}
}
