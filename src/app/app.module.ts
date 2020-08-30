import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCarComponent } from './components/add-car/add-car.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { DogsListComponent } from './dogComponents/dogs-list/dogs-list.component';
import { EditDogsComponent } from './dogComponents/edit-dogs/edit-dogs.component';
import { CreateDogComponent } from './dogComponents/create-dog/create-dog.component';
import { CreateBeerComponent } from './beerComponents/create-beer/create-beer.component';
import { EditBeerComponent } from './beerComponents/edit-beer/edit-beer.component';
import { ListBeersComponent } from './beerComponents/list-beers/list-beers.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AddCarComponent,
    EditCarComponent,
    DogsListComponent,
    EditDogsComponent,
    CreateDogComponent,
    CreateBeerComponent,
    EditBeerComponent,
    ListBeersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
