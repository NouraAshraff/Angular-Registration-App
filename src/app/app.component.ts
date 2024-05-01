import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegestrationComponent } from './components/regestration/regestration.component';
import { StudentsComponent } from './components/students/students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RegestrationComponent,
    StudentsComponent


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  students :{name:string, age:number}[] = [];

  getStudent(stud : any){
    if(stud.name.length > 3 && +(stud.age) >=20 && +(stud.age) <=30){
      this.students.push(stud);
      console.log(this.students);
    }
    
    
  }
}
