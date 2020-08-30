import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogsService/dogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {
 dogs: Dog[] = [];
 constructor(private dogService: DogsService, private router: Router) {
   }

  ngOnInit() {
   this.getDogs();
}
  getDogs() {
    this.dogService.GetAllDogs().subscribe(res => {
      this.dogs = res;
    });
  }

deleteDog(dog: Dog) {
  console.log(dog)
  this.dogService.deleteDog(parseInt(dog.id)).subscribe(res => {
    if (res === true) {
     alert('Dog deleted');
     this.getDogs();
    }
  });
}
addNewDog() {
  this.router.navigate(['/addDog']);
}

editDog(dog: Dog){
    window.localStorage.removeItem('editDogId');
    window.localStorage.setItem('editDogId', dog.id.toString());
    this.router.navigate(['editDog']);
}

}
