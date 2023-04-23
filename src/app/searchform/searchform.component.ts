import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit{

  searchform!: FormGroup
  formsubmitted: boolean = false

 constructor(private http: HttpClient, private router: Router) {}
 

  ngOnInit() {
  this.searchform = new FormGroup({
    FlyingFrom: new FormControl('', Validators.required),
    FlyingTo: new FormControl('', Validators.required),
    Departing: new FormControl('', Validators.required),
    InputAdult: new FormControl(1, Validators.required),
    InputChildren: new FormControl(''),
    Inputflyclass: new FormControl('', Validators.required)
  });
}

get FlyingFrom() {return this.searchform.get('FlyingFrom');}

 onSubmit () {
    console.log('Submitted', this.searchform.value)
    this.formsubmitted = true
 }
  }

    //Flyingfrom: string = "";
  //Flyingto: string = "";
 // Departing: string = "";
 // InputAdult: number = 1;
 // InputAdultOptions: number[] = [1,2,3,4,5,6,7,8];
  //InputChildren: number = 1;
 // InputChildrenOptions: number[] = [1,2,3,4,5]
 // Inputflyclass: string = "";

