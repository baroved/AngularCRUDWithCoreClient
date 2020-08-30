import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beersService/beers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-beers',
  templateUrl: './list-beers.component.html',
  styleUrls: ['./list-beers.component.css']
})
export class ListBeersComponent implements OnInit {
  beers: Beer[] = [];
  constructor(private beerService: BeersService,private router: Router) {
   }

  ngOnInit() {
   this.getBeers();
}
  getBeers()
  {
    this.beerService.GetAllBeers().subscribe(res => {
      this.beers = res;
    });
  }

deleteBeer(beer: Beer)
{
  console.log(beer)
  this.beerService.deleteBeer(parseInt(beer.id)).subscribe(res => {
    if (res === true) {
     alert('Beer deleted');
     this.getBeers();
    }
  });
}
addNewBeer(){
  this.router.navigate(['/addBeer']);
}

editBeer(beer: Beer) {
    window.localStorage.removeItem('editBeerId');
    window.localStorage.setItem('editBeerId', beer.id.toString());
    this.router.navigate(['editBeer']);
}

}
