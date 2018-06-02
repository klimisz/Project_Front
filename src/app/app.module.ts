import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ContactsComponent } from './contacts/contacts.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactListItemComponent } from './contacts/contact-list/contact-list-item/contact-list-item.component';

import { PopoverModule } from 'ngx-popover';
import { ExpansionPanelsModule } from 'ng2-expansion-panels';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';

import { ContactService } from './contacts/contact.service';
import { ContactRoutingModule } from './contacts/contact-routing.module';

import { ContactListItemNewComponent } from './contacts/contact-list/contact-list-item/contact-list-item-new/contact-list-item-new.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown'

import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './shared/modal/modal.component';
import { ContactDetailsEditComponent } from './contacts/contact-details/contact-details-edit/contact-details-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDetailsComponent,
    ContactListItemNewComponent,
    ModalComponent,
    ContactDetailsEditComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    PopoverModule,
    NgbModule.forRoot(),
    ExpansionPanelsModule,
    ContactRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
