import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebapiserviceService } from 'src/app/Services/webapiservice.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  EventForm = new FormGroup({
    eventId : new FormControl('',[Validators.required]),
    eventName: new FormControl('',[Validators.required])
    
  })
  errorMessage: any;
  constructor(private service : WebapiserviceService) { }

  ngOnInit(): void {
  }
  collectEventData()
  {
   console.warn(this.EventForm.value);


  this.service.post("Events",this.EventForm.value).subscribe((result) =>
    console.warn(result),
    error=>this.errorMessage="unable to add Event Please try Again");
     
    
  
   this.EventForm.reset({});    
  }
  
}
