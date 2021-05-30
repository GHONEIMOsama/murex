import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket, Tickets } from 'src/app/shared/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private readonly BASE_URL = `assets/tickets.json`;
  constructor(private readonly http: HttpClient) { }

  public getTickets(): Observable<Tickets> {
    return this.http.get<Tickets>(this.BASE_URL);
  }

  public getTicket(id: string): Observable<Ticket> {
    return this.http.get<Ticket>(this.BASE_URL + id);
  }

  public create(ticket: Ticket) {
    return this.http.post(this.BASE_URL, ticket);
  }

  public delete(id: string) {
    return this.http.delete(this.BASE_URL + id);
  }
}
