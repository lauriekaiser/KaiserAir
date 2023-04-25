import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit{
  ngOnInit() {
    this.BookFlight = new FormGroup({
      FirstName: new FormControl('', Validators.required),
      SecondName: new FormControl(''),
      ThirdName: new FormControl('')
    })
  }

  BookFlight!: FormGroup;
  FirstName: any;
  SecondName: any;
  ThirdName: any;
}

