import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/services/carsService/cars.service';


@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  car: Car;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private carService: CarsService) { }

  ngOnInit() {
    const carId = window.localStorage.getItem('editCarId');
    if (!carId) {
      alert('Invalid action.');
      this.router.navigate(['carList']);
      return;
  }

    this.editForm = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    model: ['', Validators.required],
    manufacturer: ['', Validators.required],
    price: ['', Validators.required]
  });
  //+ convert to number
    this.carService.getCarById(+carId)
    .subscribe( data => {
      console.log(data);
      this.editForm.setValue(data);
    });

}

onSubmit(){
  this.carService.editCar(this.editForm.value).subscribe(res => {
    if (res){
      debugger;
     alert('Car updated');
     this.router.navigate(['/carList']);
    }
  });
}
}
