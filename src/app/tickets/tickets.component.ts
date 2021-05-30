import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketService } from 'src/services/ticket.service';
import { Ticket, Tickets } from '../shared/ticket';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  public title = 'coding-assignment';
  public tickets$: Observable<Ticket[]>;

  constructor(service: TicketService) {
    this.tickets$ = service
      .getTickets()
      .pipe(map((tickets: Tickets) => tickets.tickets));
   }

  ngOnInit() {
  }

}
