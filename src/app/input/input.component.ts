import { Component, OnInit } from '@angular/core';
import Passanger from '../../assets/interface/passangers';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  passangers: Passanger[] = [
    {
      id: 1,
      name: 'Alex',
      checkedIn: true,
      checkedInDate: 134560000,
      children: [{name: 'Alice', age: 13}]
    },
    {
      id: 2,
      name: 'Iryna',
      checkedIn: true,
      checkedInDate: 384560000,
      children: [{name: 'Alice', age: 13}]
    },
    {
      id: 3,
      name: 'Nadejda',
      checkedIn: false,
      checkedInDate: null,
      children: [{name: 'Sofia', age: 7}]
    },
    {
      id: 4,
      name: 'Pavel',
      checkedIn: true,
      checkedInDate: 238560000,
      children: [{name: 'Fedor', age: 14}]
    },
    {
      id: 5,
      name: 'Helen',
      checkedIn: false,
      checkedInDate: null,
      children: null
    },
  ];

  someString: string = '';

  onChange(value: any) {
    this.someString = value.target.value;
  }

  ngOnInit(): void {}
}
