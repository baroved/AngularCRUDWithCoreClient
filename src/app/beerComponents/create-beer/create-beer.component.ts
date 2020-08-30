import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BeersService } from 'src/app/services/beersService/beers.service';

@Component({
  selector: 'app-create-beer',
  templateUrl: './create-beer.component.html',
  styleUrls: ['./create-beer.component.css']
})
export class CreateBeerComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private beerService: BeersService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      countOfAlcohol: ['', Validators.required],
      price: ['', Validators.required]
    });

  }

  onSubmit() {
    this.beerService.addBeer(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/beerList']);
      });
  }

}
