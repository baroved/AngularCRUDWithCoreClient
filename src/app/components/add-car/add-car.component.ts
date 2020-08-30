import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/services/carsService/cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private carService: CarsService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      model: ['', Validators.required],
      manufacturer: ['', Validators.required],
      price: ['', Validators.required]
    });

  }

  onSubmit() {
    this.carService.addCar(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/carList']);
      });
  }

}
