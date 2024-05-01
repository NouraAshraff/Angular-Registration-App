import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-regestration',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './regestration.component.html',
  styleUrl: './regestration.component.css'
})
export class RegestrationComponent {

  name  = "";
  age = "" ;
  student = {};
  @Output() myEvent = new EventEmitter();
  addStudent(){
    this.student ={name:this.name, age:this.age};
    // console.log(this.student);
    this.myEvent.emit(this.student); //send student to parent
    
  }

  

}
