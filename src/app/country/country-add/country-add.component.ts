// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-country-add',
//   templateUrl: './country-add.component.html',
//   styleUrls: ['./country-add.component.css']
// })
// export class CountryAddComponent {

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-Country-add',
  templateUrl: './country-add.component.html',
  styleUrls: ['./country-add.component.css'],
})
export class CountryAddComponent implements OnInit {
  // CountryForm!: FormGroup;

  countries: Country = new Country();

  constructor(private CountryService: CountryService) { }

  ngOnInit(): void {
    // this.initForm();
    this.CountryService.getcountry().subscribe((data: any) => {
      console.log(data);
    });
  }

  addCountry() {
    this.CountryService.addCountry(this.countries).subscribe((data: any) => {
      console.log(data);
    });
  }
}
