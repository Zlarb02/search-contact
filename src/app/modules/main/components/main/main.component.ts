import { Component, ViewChild } from '@angular/core';
import { ContactsService } from '../../services/contact-list.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  contacts!: any;
  @ViewChild(HeaderComponent) header!: HeaderComponent;

  constructor(private serviceContact:ContactsService){
  }

  ngOnInit(): void {
    this.contacts = this.serviceContact.getContacts()
  }

  
  
}
