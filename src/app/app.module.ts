import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityListComponent } from './components/cities/cities-list/cities-list.component';
import { CityService } from './services/city.service';
import { CityAddComponent } from './components/cities/cities-add/cities-add.component';
import { HttpClientModule } from '@angular/common/http';
import { BadgesAddComponent } from './components/badges/badges-add/badges-add.component';
import { BadgesListComponent } from './components/badges/badges-list/badges-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { CountryAddComponent } from './country/country-add/country-add.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { ServiceProviderDetailsComponent } from './components/ServiceProvider/service-provider-details/service-provider-details.component';

@NgModule({
  declarations: [
    AppComponent,
    
    CityListComponent,
    CityAddComponent,
    BadgesAddComponent,
    BadgesListComponent,
    NavbarComponent,
    SiteFooterComponent,
      CountryAddComponent,
    CountryListComponent,
    ServiceProviderDetailsComponent
  ],


  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
