import { Subject } from 'rxjs/Subject';
import { Contact } from './contact.model';

export class ContactService {

    contactsChanged = new Subject<Contact[]>();


    private contacts: Contact[] = [{
        name: 'Monkey',
        surname: 'D. Luffy',
        imgPath: 'https://myanimelist.cdn-dena.com/images/characters/9/310307.jpg',
        proffesion: 'Captain',
        contactInfo: {
           
        }

    }, {
        name: 'Kurosaki',
        surname: 'Ichigo',
        imgPath: 'http://images6.fanpop.com/image/photos/37800000/Kurosaki-Ichigo-ichigo-kurosaki-37837188-300-450.png',
        proffesion: 'Shinigami Substitute',
        contactInfo: {
            
        }
    }, {
        name: 'Natsu',
        surname: 'Dragneel',
        imgPath: 'https://vignette.wikia.nocookie.net/fairytail/images/c/ce/Natsu%27s_image.png/revision/latest?cb=20160425163236',
        proffesion: 'Wizard',
        contactInfo: {
           
        }
    }, {
        name: 'Midoriya',
        surname: 'Izuku',
        imgPath: 'https://i.redd.it/acypu1tk925z.jpg',
        proffesion: 'Symbol of Peace Wannabe',
        contactInfo: {
           
        }
    }]

    getContacts() {
        return this.contacts.slice();
    }

    getContact(index: number) {
        return this.contacts[index];
    }

    deleteContact(index: number) {
        this.contacts.splice(index, 1);
        this.contactsChanged.next(this.contacts.slice());
    }

    newContact(contact: Contact) {
        this.contacts.push(contact);
        this.contactsChanged.next(this.contacts.slice());

    }
    editContact(contact: Contact, id: number){
        this.contacts['id'] = contact;
        this.contactsChanged.next(this.contacts.slice());
    }
}