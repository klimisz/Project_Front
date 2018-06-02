import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
   contacts: Contact[];
   subscription: Subscription;

  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit() {
    this.subscription = this.contactService.contactsChanged.subscribe((contacts:Contact[])=> {
      this.contacts = contacts;
    })
    this.contacts = this.contactService.getContacts();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
