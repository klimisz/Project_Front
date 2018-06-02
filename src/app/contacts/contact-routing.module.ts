import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactListItemNewComponent } from './contact-list/contact-list-item/contact-list-item-new/contact-list-item-new.component';
import { ContactDetailsEditComponent } from './contact-details/contact-details-edit/contact-details-edit.component'
const contactRoutes: Routes = [

    
    {    path: 'new', component: ContactListItemNewComponent    }
     ,
    {    path: ':id', component: ContactDetailsComponent    },
    {    path: ':id/edit',    component: ContactListItemNewComponent    }    
   
        
    
]

@NgModule({
    imports:[RouterModule.forRoot(contactRoutes)],
    exports:[RouterModule]
})

export class ContactRoutingModule{}