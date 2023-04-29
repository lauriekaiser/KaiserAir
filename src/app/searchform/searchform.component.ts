import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})


export class SearchformComponent implements OnInit{

  searchform!: FormGroup
  formsubmitted: boolean = false
  FlyingFrom: any;
  FlyingTo: any;
  Departing: any;
  InputFlyClass: any;

  flightbooked!: FormGroup
  showflightbooked: boolean = false

  showTicket: boolean = false
  Time: any;
  flightoptions!: FormGroup
  Price: any;

  firstName: any;


  ngOnInit() {
  this.searchform = new FormGroup({
    FlyingFrom: new FormControl('', Validators.required),
    FlyingTo: new FormControl('', Validators.required),
    Departing: new FormControl('', Validators.required),
    InputAdult: new FormControl(1, Validators.required),
    InputChildren: new FormControl(''),
    InputFlyClass: new FormControl('', Validators.required),
  
  });

  this.flightoptions = new FormGroup ({
    Time: new FormControl(''),
    Price: new FormControl(''),
  })

  this.flightbooked = new FormGroup  ({
      firstName: new FormControl('', Validators.required),
      secondName: new FormControl(''),
      thirdName: new FormControl(''),

  });

  }

//show table with flights
 onSubmit () {
    console.log('Submitted', this.searchform.value)
    this.formsubmitted = true
    this.FlyingFrom = this.searchform.get('FlyingFrom')?.value;
    this.FlyingTo = this.searchform.get('FlyingTo')?.value;
    this.Departing = this.searchform.get('Departing')?.value;
 }

 //show name form
 onClick() {
  this.showflightbooked = true
 }

 //show ticket
 myClick() {
  this.showTicket = true
  this.Time = this.flightoptions.get('Time')?.value;
  this.Price = this.flightoptions.get('Price')?.value;
  this.firstName = this.flightbooked.get('firstName')?.value;
  this.InputFlyClass = this.searchform.get('InputFlyClass')?.value;
 }

@ViewChild('ticket', {static:false}) el!: ElementRef


lastClick() {
  let ticket = new jsPDF()

  ticket.html(this.el.nativeElement, {
    callback: (ticket) => {
      ticket.save("ticket.pdf")
    }
    })
}
}

