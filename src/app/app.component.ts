import {Component, Input, OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked, ElementRef} from '@angular/core';
import * as $ from 'jquery';
import {Options} from "fullcalendar";
import 'fullcalendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentChecked,AfterViewChecked{
  @Input() options:Options;
  text: string;
  calendarInitiated:boolean;

   constructor(
    private element:ElementRef
  ) {
  } 

  ngOnInit():void {
    console.log("ngOnInit");
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      // console.log("100ms after ngAfterViewInit ");
      var calendar = $('#angular2-fullcalendar');
      calendar.fullCalendar({
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'agendaWeek,listWeek'
          },
          defaultView: 'agendaWeek',
          defaultDate: '2017-08-03',
          editable: true,
          eventLimit: true, 
          events: [
            {
              title: 'Long Event',
              start: '2017-08-03T09:00:00',
              end: '2017-08-03T11:00:00',
              color: '#257e4a'
            },
            {
              title: 'Meeting',
              start: '2017-08-03T10:30:00',
              end: '2017-08-03T12:30:00'
            }
          ],
          selectable: true,
          selectHelper: true,
          select: function(start, end, allDay){
            var title = prompt('Event Title:');
            
            calendar.fullCalendar('unselect');

          }
      });
    }, 100)
  }

  ngAfterContentChecked(){
  }
  ngAfterViewChecked(){
  }

  updateEvent(event) {
    return $(this.element.nativeElement).fullCalendar('updateEvent', event);
  }

  clientEvents(idOrFilter) {
    return $(this.element.nativeElement).fullCalendar('clientEvents', idOrFilter);
  }

  
}
