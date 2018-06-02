import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})

export class ContactDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('modal') public modal;
  subscription: Subscription;
  contact;
  id: number;
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   this.subscription = this.route.params.subscribe((params: Params)=> {this.id = +params['id']; this.contact = this.contactService.getContact(this.id)})
  }  
  
  ngAfterViewInit() {
    this.modal.show();
  }
  onDelete(){
    this.contactService.deleteContact(this.id);
    this.onClose();
  }
 onClose(){
   this.modal.hide();
   this.router.navigate(['/..'], {relativeTo: this.route});
   this.subscription.unsubscribe();
 } 
 onEdit(){
   this.modal.hide();
   this.router.navigate(['./edit'],{relativeTo: this.route});
 }
}
