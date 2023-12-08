import { Component, OnInit } from '@angular/core';
import { CityService } from '../../../services/city.service';
import { City } from 'src/app/models/city';
// import { CityService } from './city.service';
// import { City } from './city.model';

@Component({
  selector: 'app-city-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css'],
})
export class CityListComponent implements OnInit {
  cities: City[] = [];

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities(): void {
    this.cityService.getCities().subscribe((cities) => {
      this.cities = cities;
    });
  }
}

