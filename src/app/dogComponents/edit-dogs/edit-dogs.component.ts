import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DogsService } from 'src/app/services/dogsService/dogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-dogs',
  templateUrl: './edit-dogs.component.html',
  styleUrls: ['./edit-dogs.component.css']
})
export class EditDogsComponent implements OnInit {

  dog: Dog;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private dogService: DogsService) { }

  ngOnInit() {
    const dogId = window.localStorage.getItem('editDogId');
    if (!dogId) {
      alert('Invalid action.');
      this.router.navigate(['dogList']);
      return;
  }

    this.editForm = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    age: ['', Validators.required],
    color: ['', Validators.required]
  });
//+ convert to number
    this.dogService.getDogById(+dogId)
    .subscribe( data => {
      console.log(data);
      this.editForm.setValue(data);
    });

}

onSubmit(){
  this.dogService.editDog(this.editForm.value).subscribe(res => {
    if (res){
     alert('Dog updated');
     this.router.navigate(['/dogList']);
    }
  });
}

}
