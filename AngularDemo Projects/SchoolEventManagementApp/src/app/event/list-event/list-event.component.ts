import { Component, OnInit } from '@angular/core';
import { WebapiserviceService } from 'src/app/Services/webapiservice.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  errorMessage: string;
  collection: any=[];

  constructor(private service:WebapiserviceService) { }

  ngOnInit(): void {
    this.getEvents()
  }
getEvents()
{
  this.service.get('Events').subscribe((response)=>{
    this.collection = response
    console.warn(this.collection)
  },(error) => {console.log(error.error),alert(error.error)})
}
deleteEvent(item:any)
  {
    if(this.canExit()==true)
    {
    this.collection.splice(this.collection.length-1,1);

    this.service.delete('Events',item).subscribe((result)=>console.warn(result))
    }
  }
  canExit(): boolean {
    if (confirm("Are you Sure You Want To  delete")) {
      return true;
    }
    else {
      return false;
    }
  }
}
