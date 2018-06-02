import { Component, OnInit, Input, AfterContentInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ContactService } from '../../../contact.service';
import { Contact } from '../../../contact.model';

@Component({
    selector: 'app-contact-list-item-new',
    templateUrl: './contact-list-item-new.component.html',
    styleUrls: ['./contact-list-item-new.component.css']
})

export class ContactListItemNewComponent implements OnInit, AfterContentInit {
    contactForm: FormGroup;
    contact: Contact;
    id: number;
    title: string = "New Contact";
    editMode: boolean = false;
    @ViewChild('modal') public modal;
    constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }


    ngOnInit() {
        this.contact = this.contactService.getContact(this.route.snapshot.params.id);
        if (this.contact != null) {
            this.editMode = true;
        }
        this.initForm();

    }

    ngAfterContentInit() {

        this.modal.show();
    }
    private initForm() {
        let contactImgPath = '';
        let contactName = '';
        let contactSurname = '';
        let contactProffesion = '';
        let contactBirthday = '';
        let contactInfo = {};

        if (this.route.snapshot.params.id) {
            this.title = this.contact.name + " " + this.contact.surname;
            contactImgPath = this.contact.imgPath;
            contactName = this.contact.name;
            contactSurname = this.contact.surname;
            contactProffesion = this.contact.proffesion;
            contactBirthday = '';
            contactInfo = {};
        }


        this.contactForm = new FormGroup({
            'imgpath': new FormControl(contactImgPath),
            'name': new FormControl(contactName),
            'surname': new FormControl(contactSurname),
            'proffesion': new FormControl(contactProffesion),
            'birthday': new FormControl(contactBirthday)
        });
    }

    onSubmit() {
        const newContact = new Contact(
            this.contactForm.value['imgpath'],
            this.contactForm.value['name'],
            this.contactForm.value['surname'],
            this.contactForm.value['proffesion'],
            this.contactForm.value['birthday']);

        if (this.editMode == true) {
            this.contactService.editContact(newContact, this.route.snapshot.params.id);
        } else {
            this.contactService.newContact(newContact);
        }
       this.onClose()
    }


    onClose() {
        this.modal.hide();
        this.router.navigate(['/..']);
    }
}