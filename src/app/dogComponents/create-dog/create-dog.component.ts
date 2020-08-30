import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DogsService } from 'src/app/services/dogsService/dogs.service';

@Component({
  selector: 'app-create-dog',
  templateUrl: './create-dog.component.html',
  styleUrls: ['./create-dog.component.css']
})
export class CreateDogComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private dogService: DogsService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      color: ['', Validators.required]
    });

  }

  onSubmit() {
    this.dogService.addDog(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/dogList']);
      });
  }

}
