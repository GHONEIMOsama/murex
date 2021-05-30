import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category, Status, Ticket, Tickets } from 'src/app/shared/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  tickets: Ticket[] = [
    {
      "id": "743a3731-ed4c-4d43-9973-806e585d5a39",
      "user": "Ms. Larry Shields",
      "title": "voluptas eos sequi",
      "status": Status.OK,
      "category": Category.BLOG,
      "description": "Ex voluptas ipsam qui nulla totam quia consequatur. Eius similique in asperiores consequuntur nesciunt perspiciatis tempore aperiam. Fuga tempora rerum distinctio velit et autem laudantium. Hic velit aut vel illo aperiam dolor rem. Error repellendus vel consequatur fuga incidunt et amet in velit. Neque praesentium nesciunt molestias provident corrupti.",
      "internal": true
    },
    {
      "id": "b1f35923-a55b-42de-9bf5-b948bac92906",
      "user": "Rosie Ryan",
      "title": "qui dicta sunt",
      "status": Status.OK,
      "category": Category.BLOG,
      "description": "Est eligendi magnam laborum ducimus quo perspiciatis illo. Molestias rerum aliquam minima animi nostrum temporibus veritatis. Natus qui quam aliquam adipisci laborum omnis. Laboriosam sapiente a autem.",
      "internal": true
    },
    {
      "id": "1a3430da-0aa0-4b04-8a72-563477675b12",
      "user": "Craig Hahn",
      "title": "praesentium qui dolorum",
      "status": Status.ERROR,
      "category": Category.DOCUMENTATION,
      "description": "Atque consectetur consectetur. Eius sunt explicabo accusantium ipsam qui non. Enim nihil voluptatem temporibus ea sint. Quo rerum libero ea quas ullam. Commodi enim aliquid porro nobis iure et natus. Repellat aut voluptatem dolorum dicta iure.",
      "internal": false
    },
    {
      "id": "cac26837-9592-44e4-853a-c446496c4c3b",
      "user": "Nichole Pouros",
      "title": "ipsum id molestiae",
      "status": Status.FORWARD,
      "category": Category.DOCUMENTATION,
      "description": "Non nobis perferendis. Aut repellat est. Qui mollitia minima iste at iusto iure provident modi excepturi. Laboriosam quia et nostrum similique. Nisi aperiam mollitia ipsum modi non labore omnis veniam eum. Non omnis aspernatur eos beatae voluptatem ipsam.",
      "internal": false
    },
    {
      "id": "02a3c23e-d495-4b3a-8531-8b5be75713a9",
      "user": "Arlene Johns PhD",
      "title": "iste voluptas possimus",
      "status": Status.WARNING,
      "category": Category.BLOG,
      "description": "Qui aliquid at unde veniam. Impedit sunt amet eaque eligendi voluptas autem qui mollitia voluptatem. Qui quasi rerum iste corrupti ut voluptas. Qui ut quis inventore magni nisi voluptatum qui.",
      "internal": false
    }
  ]

  private readonly BASE_URL = `assets/tickets.json`;
  constructor(private readonly http: HttpClient) { }

  public getTickets(): Observable<Tickets> {
    //return this.http.get<Tickets>(this.BASE_URL);
    return of({tickets: this.tickets});
  }

  /**
   * Get a ticket with id.
   * @param id the id of the ticket we want to fetch
   * @returns an observable for the ticket with id equals to id
   */
  public getTicket(id: string): Observable<Ticket> {
    //return this.http.get<Ticket>(this.BASE_URL + id);
    return of(this.tickets.find(ticket => ticket.id === id));
  }

  /**
   * Post a ticket.
   * @param ticket the ticket we want to post.
   * @returns an observable for the created ticket.
   */
  public create(ticket: Ticket): Observable<Ticket> {
    //return this.http.post<Ticket>(this.BASE_URL, ticket);
    this.tickets.push(ticket);
    return of(ticket);
  }

  /**
   * DELETE tickets with thers ids
   * @param ids the ids of the tickets we want to delete
   * @returns an observable for any sort of type, just to verify if tickets are successfuly deleted
   */
  public delete(ids: string[]): Observable<any> {
    //return this.http.delete(this.BASE_URL + ids.join(','));
    ids.forEach(id => {
      this.tickets.splice(this.tickets.findIndex(ticket => ticket.id === id),1);
    })
    return of(true);
  }
}
