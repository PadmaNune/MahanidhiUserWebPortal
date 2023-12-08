import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityAddComponent } from './components/cities/cities-add/cities-add.component';
import { BadgesAddComponent } from './components/badges/badges-add/badges-add.component';
import { BadgesListComponent } from './components/badges/badges-list/badges-list.component';
import { ServiceProviderDetailsComponent } from './components/ServiceProvider/service-provider-details/service-provider-details.component';

const routes: Routes = [
  { path: 'add-badge', component: BadgesAddComponent },
  { path: 'list-badges', component: BadgesListComponent },

  { path: 'add-city', component: CityAddComponent },
  { path: 'add-list', component: CityAddComponent },

  { path: 'SP-Review', component: ServiceProviderDetailsComponent },

  { path: '', component: BadgesListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
