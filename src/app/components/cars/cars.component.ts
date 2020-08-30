import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../services/carsService/cars.service';
import { getLocaleNumberSymbol } from '@angular/common';
import {Router, NavigationExtras} from "@angular/router";
import { AddCarComponent } from '../add-car/add-car.component';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];
  
  constructor(private carService: CarsService,private router: Router) {
   }

  ngOnInit() {
   this.getCars();
}
  getCars()
  {
    this.carService.GetAllCars().subscribe(res => {
      this.cars = res;
    });
  }

deleteCar(car: Car)
{
  console.log(car)
  this.carService.deleteCar(parseInt(car.id)).subscribe(res => {
    if (res === true) {
     alert('Car deleted');
     this.getCars();
    }
  });
}
addNewCar(){
  this.router.navigate(['/addCar']);
}

editCar(car: Car){
    window.localStorage.removeItem("editCarId");
    window.localStorage.setItem("editCarId", car.id.toString());
    this.router.navigate(['editCar']);
}

}
