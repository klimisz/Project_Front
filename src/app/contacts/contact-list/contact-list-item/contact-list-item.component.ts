import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {
  @Input() contact;
  @Input() index: number;
  shown: boolean = false;

  constructor() { }

  ngOnInit() {
  
    
  }
}
