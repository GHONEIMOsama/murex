import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { TicketsComponent } from './tickets/tickets.component';


const routes: Routes = [
  {path: '', component: TicketsComponent},
  {path: 'create', component: CreateTicketComponent},
  {path: 'create/:id', component: CreateTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
