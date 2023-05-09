import { Component, ViewChild } from '@angular/core';
import { ContactsService } from '../../services/contact-list.service';
import { HeaderComponent } from '../header/header.component';
import { contact } from 'src/core/models/contact.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  contacts: contact[] = [];
  @ViewChild(HeaderComponent) header!: HeaderComponent;

  constructor(private serviceContact: ContactsService) { }

  public ngOnInit(): void {
    this.serviceContact.getContacts().then((contacts: contact[]) => {
      this.contacts = contacts;
    }).catch((error: any) => {
      console.error('Error while fetching contacts', error);
    });
  }

}