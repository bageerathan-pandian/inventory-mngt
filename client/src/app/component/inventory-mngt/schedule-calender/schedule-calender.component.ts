import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-schedule-calender',
  templateUrl: './schedule-calender.component.html',
  styleUrls: ['./schedule-calender.component.scss']
})
export class ScheduleCalenderComponent implements OnInit {

  constructor() { }

 
  events: any[];
  options: any;

  ngOnInit() {
      this.events = [
          {
              "title": "All Day Event",
              "start": "2020-06-14"
          },
          {
              "title": "Long Event",
              "start": "2019-01-07",
              "end": "2019-01-10"
          },
          {
              "title": "Repeating Event",
              "start": "2019-01-09T16:00:00"
          },
          {
              "title": "Repeating Event",
              "start": "2020-01-16T16:00:00"
          },
          {
              "title": "Conference",
              "start": "2020-01-11",
              "end": "2020-01-13"
          }
      ];
      this.options = {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultDate: new Date(),
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        dateClick: (e) =>  {
            //handle date click
            console.log(e)
        }
    };
  }

}
