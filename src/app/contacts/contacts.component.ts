import { Component, OnInit } from '@angular/core';

import { PopoverModule } from 'ngx-popover';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  searchProperty = "Name";
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  
  onNewContact(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
