import { Component } from '@angular/core';
import { ContactsService } from '../../services/contact-list.service';
import { contact } from 'src/core/models/contact.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  newContact: contact = {
    id: 0,
    lastName: '',
    firstName: '',
    isSupplier: false,
    imgUrl: '',
    telephone: ''
  };

  constructor(private serviceContact: ContactsService) { }

  onSubmit(form: any) {
    const id = this.serviceContact.generateNewId();
    const newContact = { ...this.newContact, id };
    this.serviceContact.addContact(newContact);
    form.reset();
    console.log(newContact)
    console.log(this.serviceContact.contactList)
  }
}