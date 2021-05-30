import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/services/ticket.service';
import { Category, Status, Ticket } from '../shared/ticket';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  form: FormGroup;
  id: string;
  categories: string[];
  statuses: string[];
  ticket: Ticket;

  constructor(private formBuilder: FormBuilder, private ticketService: TicketService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.categories = Object.values(Category);
    this.statuses = Object.values(Status);
    this.form = this.formBuilder.group({
      titleField: ['', Validators.required],
      descriptionField: ['', Validators.required],
      categoryField: ['', Validators.required],
      statusField: ['', Validators.required],
      myNameField: ['', Validators.required],
      iAmField: [false, Validators.required]
    });
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.ticketService.getTicket(this.id).subscribe(ticket => {
          this.ticket = ticket;
          this.initForm();
        });
      } else {
        this.id = this.generateRandomId();
      }
    });
  }

  get fCtrls() {
    return this.form.controls;
  }

  initForm(): void {
    this.fCtrls.titleField.setValue(this.ticket.title);
    this.fCtrls.descriptionField.setValue(this.ticket.description);
    this.fCtrls.categoryField.setValue(this.ticket.category);
    this.fCtrls.statusField.setValue(this.ticket.status);
    this.fCtrls.myNameField.setValue(this.ticket.user);
    this.fCtrls.iAmField.setValue(this.ticket.internal);
  }

  create(): void {
    const ticket: Ticket = {
      id: this.id,
      title: this.fCtrls.titleField.value,
      description: this.fCtrls.descriptionField.value,
      category: this.fCtrls.categoryField.value,
      status: this.fCtrls.statusField.value,
      user: this.fCtrls.myNameField.value,
      internal: this.fCtrls.iAmField.value 
    };
    this.ticketService.create(ticket).subscribe(res => {
      this.router.navigate(['']);
    }, err => {
      console.log(err)
    });
  }

  private generateRandomId(): string {
    return Math.floor(Math.random() * 1000000) + '-' + Math.floor(Math.random() * 10000) + '-' + Math.floor(Math.random() * 10000);
  }

}
