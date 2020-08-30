import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { DogsListComponent } from './dogComponents/dogs-list/dogs-list.component';
import { CreateDogComponent } from './dogComponents/create-dog/create-dog.component';
import { EditDogsComponent } from './dogComponents/edit-dogs/edit-dogs.component';
import { ListBeersComponent } from './beerComponents/list-beers/list-beers.component';
import { CreateBeerComponent } from './beerComponents/create-beer/create-beer.component';
import { EditBeerComponent } from './beerComponents/edit-beer/edit-beer.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'carList', component: CarsComponent },
  { path: 'addCar', component: AddCarComponent },
  { path: 'editCar', component: EditCarComponent },
  { path: 'dogList', component: DogsListComponent },
  { path: 'addDog', component: CreateDogComponent },
  { path: 'editDog', component: EditDogsComponent },

  { path: 'beerList', component: ListBeersComponent },
  { path: 'addBeer', component: CreateBeerComponent },
  { path: 'editBeer', component: EditBeerComponent },
  { path: '**', component: CarsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
