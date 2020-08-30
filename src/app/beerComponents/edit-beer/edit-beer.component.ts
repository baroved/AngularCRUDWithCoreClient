import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BeersService } from 'src/app/services/beersService/beers.service';

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent implements OnInit {

  beer: Beer;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private beerService: BeersService) { }

  ngOnInit() {
    const beerId = window.localStorage.getItem('editBeerId');
    if (!beerId) {
      alert('Invalid action.');
      this.router.navigate(['beerList']);
      return;
  }

    this.editForm = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    countOfAlcohol: ['', Validators.required],
    price: ['', Validators.required]
  });
  //+ convert to number
    this.beerService.getBeerById(+beerId)
    .subscribe( data => {
      console.log(data);
      this.editForm.setValue(data);
    });

}

onSubmit(){
  this.beerService.editBeer(this.editForm.value).subscribe(res => {
    if (res){
     alert('Beer updated');
     this.router.navigate(['/beerList']);
    }
  });
}
}
