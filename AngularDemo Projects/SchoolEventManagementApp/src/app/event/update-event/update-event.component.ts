import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WebapiserviceService } from 'src/app/Services/webapiservice.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  EventFormEdit = new FormGroup({
    eventId : new FormControl(''),
    eventName: new FormControl('')
    
  })
  constructor(private service:WebapiserviceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.service.getById("Events",this.router.snapshot.params.id).subscribe((result: any)=>
    {
        this.EventFormEdit=new FormGroup(
      {
        eventId:new FormControl(result['eventId']),
        eventName:new FormControl(result['eventName'])
      
        
      })

    })
  
  }
  collectEventData()
  {
    
    console.warn(this.EventFormEdit.value)
    this.service.update("Events",this.EventFormEdit.value).subscribe((result)=>
    console.warn(result))
    
  }
  }


