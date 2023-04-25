import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { BookflightComponent } from '../bookflight/bookflight.component';

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
  
  
 

// constructor(private http: HttpClient, private router: Router) {}
 

  ngOnInit() {
  this.searchform = new FormGroup({
    FlyingFrom: new FormControl('', Validators.required),
    FlyingTo: new FormControl('', Validators.required),
    Departing: new FormControl('', Validators.required),
    InputAdult: new FormControl(1, Validators.required),
    InputChildren: new FormControl(''),
    InputFlyClass: new FormControl('', Validators.required)
  });
}


 onSubmit () {
    console.log('Submitted', this.searchform.value)
    this.formsubmitted = true
    this.FlyingFrom = this.searchform.get('FlyingFrom')?.value;
    this.FlyingTo = this.searchform.get('FlyingTo')?.value;
    this.Departing = this.searchform.get('Departing')?.value;
 }
  }




