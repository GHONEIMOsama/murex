import { Component, Input, OnInit } from '@angular/core';
import { TicketService } from 'src/services/ticket.service';
import { Ticket } from '../shared/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  
  @Input() public ticket: Ticket;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
  }

  delete() {
    this.ticketService.delete([this.ticket.id]).subscribe(suc => {
      console.log('delete success');
    }, err => {
      console.error('delete failed');
    })
  }

}
