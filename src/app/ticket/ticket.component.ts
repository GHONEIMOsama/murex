import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../shared/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  
  @Input() public ticket: Ticket;

  constructor() { }

  ngOnInit() {
  }

}
