import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebapiserviceService } from 'src/app/Services/webapiservice.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentForm = new FormGroup({
    eventId : new FormControl('',[Validators.required]),
    studentName: new FormControl('',[Validators.required]),
    studentId: new FormControl('',[Validators.required])
  })
  eventList :any = [];
  constructor(private service : WebapiserviceService) { }

  ngOnInit(): void {
    this.service.get('Events').subscribe((result)=>{
      this.eventList = result;
      console.log(this.eventList)
    })
  }
  collectStudentData()
  {
   console.warn(this.studentForm.value);


  this.service.post('Students',this.studentForm.value).subscribe((result) =>{
    console.warn(result)
     });
    
 
   this.studentForm.reset({});    
  }
}
