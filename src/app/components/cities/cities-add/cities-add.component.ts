import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityService } from '../../../services/city.service';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-city-add',
  templateUrl: './cities-add.component.html',
  styleUrls: ['./cities-add.component.css'],
})
export class CityAddComponent implements OnInit {
  // cityForm!: FormGroup;

  cities: City = new City();

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    // this.initForm();
    this.cityService.getCities().subscribe((data: any) => {
      console.log(data);
    });
  }

  addCity() {
    this.cityService.addCity(this.cities).subscribe((data: any) => {
      console.log(data);
    });
  }

  // initForm(): void {
  //   this.cityForm = this.fb.group({
  //     name: ['', Validators.required],
  //     stateId: [null, Validators.required],
  //     gpsLocation: ['', Validators.required],
  //   });
  // }

  // addCity(): void {
  //   if (this.cityForm.valid) {
  //     const newCity: City = {
  //       id: 0,
  //       Name: this.cityForm.get('Name').value,
  //       StateId: this.cityForm.get('StateId').value,
  //       GpsLocation: this.cityForm.get('GpsLocation').value,
  //     };

  //   this.cityService.addCity(newCity).subscribe(() => {
  //     // Optionally, navigate to the city list or perform other actions after adding
  //   });
  // }
}
