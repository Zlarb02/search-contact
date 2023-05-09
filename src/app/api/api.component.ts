import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contact } from 'src/core/models/contact.model';
import { ContactsService } from '../modules/main/services/contact-list.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  contacts: contact[] = [];

  constructor(private http: HttpClient, private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.http.get<contact[]>('/api').subscribe(
      (data: contact[]) => {
        this.contacts = data;
        this.contactsService.contactList = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}