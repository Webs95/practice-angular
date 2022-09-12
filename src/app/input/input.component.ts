import { Component, OnInit } from '@angular/core';
import Passanger from '../interface/passangers';

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
    },
    {
      id: 2,
      name: 'Iryna',
      checkedIn: true,
    },
    {
      id: 3,
      name: 'Nadejda',
      checkedIn: false,
    },
    {
      id: 4,
      name: 'Pavel',
      checkedIn: true,
    },
    {
      id: 5,
      name: 'Helen',
      checkedIn: false,
    },
  ];

  someText: string = '';

  handleChange(e: any) {
    this.someText = e.target.value;
  }

  ngOnInit(): void {}
}
