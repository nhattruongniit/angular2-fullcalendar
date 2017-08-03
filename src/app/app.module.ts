import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import {CalendarComponent} from 'ap-angular2-fullcalendar/src/calendar/calendar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
  changeCalendarView(view) {
    this.myCalendar.fullCalendar('changeView', view);
  }
 }
